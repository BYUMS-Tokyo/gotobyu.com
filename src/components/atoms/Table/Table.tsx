import { FC, HTMLAttributes } from 'react';
import styles from './Table.module.css';

export interface Props extends HTMLAttributes<HTMLTableElement> {
  thickBorderColor?: string;
}

export const Table: FC<Props> = ({
  className = '',
  thickBorderColor,
  ...props
}: Props) => (
  <div
    className={`rounded-md overflow-x-auto overflow-y-hidden whitespace-nowrap ${className}`}
  >
    <table {...props} className={`min-w-full table-auto ${styles.table}`} />
    <style jsx>{`
      .${styles.table} {
        ${thickBorderColor ? `--thick-border-color: ${thickBorderColor}` : ''};
      }
    `}</style>
  </div>
);
