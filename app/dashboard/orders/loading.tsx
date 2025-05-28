import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <LoadingSpinner size="large" />
      <h2 className="mt-4 text-lg font-medium">Loading orders...</h2>
    </div>
  );
}
