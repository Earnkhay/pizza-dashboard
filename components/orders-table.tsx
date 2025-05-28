"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { formatDate } from "@/lib/utils";
import { PizzaOrder } from "@/types";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ORDER_STATUSES } from "@/data/orders";

interface OrdersTableProps {
  orders: PizzaOrder[];
}

export function OrdersTable({ orders: initialOrders }: OrdersTableProps) {
  const [orders, setOrders] = useState<PizzaOrder[]>(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sortField, setSortField] = useState<string | null>("orderDate");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  // Filter and sort orders
  const filteredOrders = orders
    .filter((order) => {
      // Search filter
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        order.id.toLowerCase().includes(searchLower) ||
        order.customerName.toLowerCase().includes(searchLower) ||
        order.pizzaType.toLowerCase().includes(searchLower);

      // Status filter
      const matchesStatus = !statusFilter || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (!sortField) return 0;

      let comparison = 0;
      if (sortField === "orderDate") {
        comparison =
          new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime();
      } else if (sortField === "id") {
        comparison = a.id.localeCompare(b.id);
      } else if (sortField === "customerName") {
        comparison = a.customerName.localeCompare(b.customerName);
      } else if (sortField === "quantity") {
        comparison = a.quantity - b.quantity;
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const SortIcon = ({ field }: { field: string }) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? (
      <ArrowUp className="ml-1 h-4 w-4" />
    ) : (
      <ArrowDown className="ml-1 h-4 w-4" />
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search orders..."
            className="w-full md:w-[300px] pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          className="md:hidden w-full"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          {isFilterExpanded ? "Hide Filters" : "Show Filters"}
        </Button>

        <div
          className={`w-full md:flex gap-2 ${
            isFilterExpanded || "hidden md:flex"
          }`}
        >
          <Select
            value={statusFilter || ""}
            onValueChange={(value) => setStatusFilter(value || null)}
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Statuses</SelectItem>
                {ORDER_STATUSES.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="w-[100px] cursor-pointer"
                onClick={() => handleSort("id")}
              >
                <div className="flex items-center">
                  Order ID
                  <SortIcon field="id" />
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("customerName")}
              >
                <div className="flex items-center">
                  Customer
                  <SortIcon field="customerName" />
                </div>
              </TableHead>
              <TableHead>Pizza Type</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("quantity")}
              >
                <div className="flex items-center">
                  Qty
                  <SortIcon field="quantity" />
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("orderDate")}
              >
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Date
                  <SortIcon field="orderDate" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No orders found.
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.pizzaType}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{formatDate(order.orderDate)}</TableCell>
                  <TableCell>
                    <StatusBadge status={order.status} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
