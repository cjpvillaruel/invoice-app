import EmptyInvoice from 'components/EmptyInvoice';
import InvoiceItem from 'components/InvoiceItem';
import React from 'react';

interface IProps {
  invoices: IInvoice[];
}

const InvoiceList = ({ invoices }: IProps) => {
  if (invoices.length === 0)
    return <EmptyInvoice />;
  return (
    <div>
      {invoices.map((invoice) => <InvoiceItem key={invoice.id} />)}
    </div>
  )
}

export default InvoiceList;
