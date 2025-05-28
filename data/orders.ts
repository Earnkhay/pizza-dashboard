import { PizzaOrder } from '@/types';
import { generateOrderId } from '@/lib/utils';

export const PIZZA_TYPES = [
  'Margherita',
  'Pepperoni',
  'Veggie Supreme',
  'Hawaiian',
  'BBQ Chicken',
  'Meat Lovers',
  'Buffalo Chicken',
  'Mushroom & Truffle',
  'Four Cheese',
  'Pesto & Spinach'
];

export const ORDER_STATUSES = [
  'Pending',
  'Preparing',
  'Out for Delivery',
  'Delivered',
  'Cancelled'
] as const;

// Generate random mock data
export const generateMockOrders = (count = 20): PizzaOrder[] => {
  const mockOrders: PizzaOrder[] = [];
  
  const names = [
    'John Doe', 'Jane Smith', 'Michael Brown', 'Emily Johnson', 'David Wilson',
    'Sarah Taylor', 'James Anderson', 'Lisa Martinez', 'Robert Thomas', 'Emma Garcia',
    'Daniel Miller', 'Olivia Davis', 'William Rodriguez', 'Sophia Martinez', 'Joseph Lee',
    'Isabella Lopez', 'Matthew Harris', 'Mia Clark', 'Andrew Lewis', 'Abigail Walker'
  ];
  
  // Create orders with recent dates (within the last 7 days)
  for (let i = 0; i < count; i++) {
    const daysAgo = Math.floor(Math.random() * 7);
    const hoursAgo = Math.floor(Math.random() * 24);
    const minutesAgo = Math.floor(Math.random() * 60);
    
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    date.setHours(date.getHours() - hoursAgo);
    date.setMinutes(date.getMinutes() - minutesAgo);
    
    mockOrders.push({
      id: generateOrderId(i),
      customerName: names[Math.floor(Math.random() * names.length)],
      pizzaType: PIZZA_TYPES[Math.floor(Math.random() * PIZZA_TYPES.length)],
      quantity: Math.floor(Math.random() * 5) + 1,
      orderDate: date.toISOString(),
      status: ORDER_STATUSES[Math.floor(Math.random() * ORDER_STATUSES.length)]
    });
  }
  
  // Sort by order date (newest first)
  return mockOrders.sort((a, b) => 
    new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
  );
};

// Export a constant array of mock orders
export const MOCK_ORDERS = generateMockOrders();