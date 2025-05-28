export interface PizzaOrder {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
}

export interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}