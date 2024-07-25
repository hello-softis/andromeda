import type { ComponentProps, ReactNode } from "react"

export interface CardProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function Card({ children, ...props }: CardProps) {
  return (
    <div {...props} className={`flex flex-col`}>
      {children}
    </div>
  )
}