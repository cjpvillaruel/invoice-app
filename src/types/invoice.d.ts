type InvoiceStatus = 'pending' | 'paid' | 'draft';

interface IInvoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  senderAddress: IAddress;
  clientAddress: IAddress;
  total: number;
  status: InvoiceStatus;
  items: IProduct[];
}
