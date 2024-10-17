export interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`bg-slate-300 dark:bg-grey-600 animate-pulse ${className}`}
    />
  )
}

Skeleton.className = 'Skeleton'