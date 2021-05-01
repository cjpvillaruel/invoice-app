import InvoiceList from 'components/InvoiceList';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import styles from './Invoices.module.scss';

const Invoices = () => (
  <div>
    <Helmet>
      <title>Invoices | Frontent Mentor</title>
    </Helmet>
    <div className={styles.header}>
      <div>
        <h1>Invoices</h1>
        <p>There are 7 total invoices</p>
      </div>
      <div className={styles.headerRight}>
        <p >Filter by status</p>
        <Button variant="primary">
          New Invoice
        </Button>
      </div>

    </div>
    <InvoiceList invoices={[]} />

  </div>
);

export default Invoices;
