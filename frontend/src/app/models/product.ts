export interface Products{
    id: number;
    name: string;
    description: string;
    type: string;
    product_category:string;
    default_code: number;
    barcode: number;
    list_price: number;
    taxes_id: string;
    company: string;
    sale_ok: number;
    purchase_ok: number;
    invoice_policy: string;
    expense_policy: string;
}