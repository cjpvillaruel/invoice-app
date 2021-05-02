import React from 'react';
import styles from './Status.module.scss';

interface IProps {
  status: InvoiceStatus;
}
const Status = ({ status }: IProps) => {
  return (
    <div className={`${styles.status} ${styles[status]}`}>
      <div className={`${styles.circle} ${styles[status]}`}></div>
      <div>{status}</div>
    </div>
  );
}
export default Status;
