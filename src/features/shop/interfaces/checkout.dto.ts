import type { IItemBase } from "@/features/interfaces/item.base.dto";
import type { ICardStripe } from "@/features/shop/interfaces/payments.dto";
import type { IItemPublic } from "@/features/shop/interfaces/items.dto";


const Status = [
  'pending',      // Pendiente de pago
  'paid',         // Pagada
  'voided',       // Anulada y/o
  'refunded'      // Reembolsada
] as const

export type InvoiceStatus = keyof typeof Status;

interface IInvoiceBase {
  items: IItemBase[];
}

export interface IInvoiceCreate extends IInvoiceBase {
  clientId: number;
  card: ICardStripe;
}

export interface IInvoicePublic extends IInvoiceBase {
  invoiceNumber: string;
  date: string;
  status: InvoiceStatus;
  fullName: string;
  items: IItemPublic[];
}