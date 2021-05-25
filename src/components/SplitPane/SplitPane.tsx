import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export const SplitPane: FC<Props> = ({ className = '', ...props }: Props) => (
  <div {...props} className={`grid grid-cols-1 md:grid-cols-2 ${className}`} />
);
