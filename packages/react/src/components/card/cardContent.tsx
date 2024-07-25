import type { ComponentProps, ReactNode } from "react"

export interface CardContentProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function CardContent({ children, ...props }: CardContentProps) {
  return (
    <div {...props} className={`w-full bg-grey-800 py-6 px-8 rounded-md`}>
      {children}
    </div>
  )
}