import { getServerSession } from "next-auth";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MOCK_ORDERS } from "@/data/orders";

export default async function DashboardPage() {
  const session = await getServerSession();
  const user = session?.user;

  // Calculate order statistics
  const totalOrders = MOCK_ORDERS.length;
  const pendingOrders = MOCK_ORDERS.filter(
    (order) => order.status === "Pending"
  ).length;
  const preparingOrders = MOCK_ORDERS.filter(
    (order) => order.status === "Preparing"
  ).length;
  const deliveringOrders = MOCK_ORDERS.filter(
    (order) => order.status === "Out for Delivery"
  ).length;

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Hello, {user?.name || "User"}!
        </h1>
        <p className="text-muted-foreground">
          Welcome to your pizza order management dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.floor(Math.random() * 10)}% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingOrders}</div>
            <p className="text-xs text-muted-foreground">
              New orders awaiting processing
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Preparing</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{preparingOrders}</div>
            <p className="text-xs text-muted-foreground">
              Orders currently being prepared
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivering</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{deliveringOrders}</div>
            <p className="text-xs text-muted-foreground">
              Orders out for delivery
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_ORDERS.slice(0, 5).map((order, index) => (
                <div
                  key={order.id}
                  className="flex items-center gap-4 rounded-lg border p-3"
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-primary"
                    >
                      <path d="M3 7V5c0-1.1.9-2 2-2h2M17 3h2c1.1 0 2 .9 2 2v2M21 17v2c0 1.1-.9 2-2 2h-2M7 21H5c-1.1 0-2-.9-2-2v-2" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {order.customerName} ordered {order.quantity} {order.pizzaType}{order.quantity > 1 ? 's' : ''}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.orderDate).toLocaleDateString()} · {order.id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle>Pizza Order Stats</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {PIZZA_TYPES.slice(0, 5).map((type) => {
              const count = MOCK_ORDERS.filter(
                (order) => order.pizzaType === type
              ).length;
              const percentage = Math.round((count / totalOrders) * 100);
              
              return (
                <div key={type} className="mb-4 last:mb-0">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{type}</span>
                    <span className="text-muted-foreground">{percentage}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Most popular pizza types - hardcoded for the mock data
const PIZZA_TYPES = [
  "Pepperoni",
  "Margherita",
  "Meat Lovers",
  "Hawaiian",
  "BBQ Chicken",
];