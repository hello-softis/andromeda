export interface SkeletonProps {
  className?: string
}

export function SkeletonLine({ className }: SkeletonProps) {
  return (
    <div
      className={`w-40 h-2 my-1 rounded-full bg-slate-300 dark:bg-grey-600 animate-pulse ${className}`}
    />
  )
}

export function SkeletonCircle({ className }: SkeletonProps) {
  return (
    <div
      className={`w-10 h-10 rounded-full bg-slate-300 dark:bg-grey-600 animate-pulse ${className}`}
    />
  )
}

export function SkeletonRectangle({ className }: SkeletonProps) {
  return (
    <div
      className={`w-56 h-32 my-1 rounded-md bg-slate-300 dark:bg-grey-600 animate-pulse ${className}`}
    />
  )
}

SkeletonLine.displayName = 'Skeleton.Line'
SkeletonCircle.displayName = 'Skeleton.Circle'
SkeletonRectangle.displayName = 'Skeleton.Rectangle'