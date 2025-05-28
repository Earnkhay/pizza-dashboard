import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function LoadingSpinner({ className, size = 'medium' }: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          'animate-spin rounded-full border-t-2 border-primary',
          sizeClasses[size],
          className
        )}
      ></div>
    </div>
  );
}