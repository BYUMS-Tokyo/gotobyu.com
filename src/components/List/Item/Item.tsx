import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLLIElement> {}

export const Item: FC<Props> = ({ className = '', ...props }: Props) => (
  <li {...props} className={`ml-4 ${className}`} />
);
