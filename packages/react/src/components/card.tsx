import type { ReactNode, ComponentProps } from 'react'

export interface CardProps extends ComponentProps<'div'> {
  children: ReactNode
  className?: string
}

export function CardRoot({ children, className, ...props }: CardProps) {
  return (
    <div className={`flex flex-col overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children }: CardProps) {
  return (
    <header className="flex items-center justify-between h-16 p-4 bg-slate-100 dark:bg-grey-800 bg-gradient-to-l to-grey-700 from-transparent rounded-t-sm box-border">
      {children}
    </header>
  )
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div
      className={`px-8 py-6 rounded-sm bg-slate-50 dark:bg-grey-800 text-wrap overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}