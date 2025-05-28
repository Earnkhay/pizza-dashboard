import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500';
      case 'Preparing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500';
      case 'Out for Delivery':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-500';
      case 'Delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
        getStatusColor(status),
        className
      )}
    >
      {status}
    </span>
  );
}