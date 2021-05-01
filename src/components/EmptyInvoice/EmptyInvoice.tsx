import React from 'react';
import { ReactComponent as Empty } from 'assets/illustration-empty.svg';
import styles from './EmptyInvoice.module.scss';

const EmptyInvoice = () => (
  <div className={styles.container}>
    <Empty />
    <h2>There is nothing here</h2>
    <p>Create an invoice by clicking the
      <br />
      <span>New Invoice</span> and get started</p>
  </div>
);

export default EmptyInvoice;
