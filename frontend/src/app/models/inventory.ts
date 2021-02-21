export interface Inventory {
    id: number;
    date: Date;
    name: string;
    accounting_date: Date;
    product_ids: number;
    location_ids: number;
    prefill_counted_quantity: string;
    exhausted: number;
    state: string;
}