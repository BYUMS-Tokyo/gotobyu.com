import React, {
  Component,
  ComponentPropsWithoutRef,
  ChangeEventHandler,
} from 'react';
import type { SearchBoxProvided } from 'react-instantsearch-core';

interface Props
  extends SearchBoxProvided,
    Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'onChange'> {
  delay: number;
}

interface State {
  value: string;
}

/**
 * algolia SearchBox with debounce.
 * use class component since debouncing wihtout using extra node_modules in functional component is tricky.
 *
 * @see https://www.algolia.com/doc/guides/building-search-ui/going-further/improve-performance/react/#debouncing
 */
export class CustomSearchBox extends Component<Props, State> {
  private timerId: number | undefined;

  constructor(props: Props) {
    super(props);

    const { currentRefinement } = this.props;

    this.state = {
      value: currentRefinement,
    };
  }

  onChangeDebounced: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { refine, delay } = this.props;
    const { value } = event.currentTarget;

    clearTimeout(this.timerId);

    // must use "window.setTimeout" instead of timeout
    // since "timeout" return type is "NodeJS.timeout" which is not a number
    this.timerId = window.setTimeout(() => {
      refine(value);
    }, delay);

    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { refine, currentRefinement, ...props } = this.props;

    return <input {...props} value={value} onChange={this.onChangeDebounced} />;
  }
}
