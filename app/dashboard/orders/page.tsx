import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OrdersTable } from "@/components/orders-table";
import { MOCK_ORDERS } from "@/data/orders";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pizza Orders</h1>
        <p className="text-muted-foreground">Manage all your pizza orders in one place</p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Orders</CardTitle>
          <CardDescription>
            View, sort and filter all your pizza orders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OrdersTable orders={MOCK_ORDERS} />
        </CardContent>
      </Card>
    </div>
  );
}