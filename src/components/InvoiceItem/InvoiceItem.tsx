import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ReactComponent as ArrowRight } from 'assets/icon-arrow-right.svg';
import styles from './InvoiceItem.module.scss';
import Status from 'components/Status';

interface IProps {
  invoice: IInvoice;
}

const InvoiceItem = ({ invoice }: IProps) => {
  const { id, paymentDue, clientName, total, status } = invoice;
  return (
    <Row className={styles.invoice}>
      <Col lg={2}>#<span className={styles.id}>{id}</span></Col>
      <Col lg={3}>Due {paymentDue}</Col>
      <Col lg={2}>{clientName}</Col>
      <Col lg={2} className={styles.total}>$ {total}</Col>
      <Col lg={3} className={styles.status}><Status status={status} /></Col>
      <div className={styles.arrow}><ArrowRight /></div>
    </Row>
  )
};

export default InvoiceItem;
