import type { ReactNode, ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const badgeVariants = tv({
  base: 'flex items-center text-center justify-center rounded-sm font-bold leading-none uppercase',
  variants: {
    variant: {
      new: 'bg-new-light text-new-low dark:bg-new-low dark:text-new-light',
      danger:
        'bg-danger-light text-danger-low dark:bg-danger-low dark:text-danger-light',
      success:
        'bg-success-light text-success-low dark:bg-success-low dark:text-success-light',
      warning:
        'bg-warning-light text-warning-low dark:bg-warning-low dark:text-warning-light',
      info: 'bg-nebula-300 text-nebula-950 dark:bg-nebula-950 dark:text-nebula-300',
      custom: 'bg-softis-mid text-slate-50',
    },
    size: {
      sm: 'px-3 h-6 text-xs',
      md: 'px-3 h-7 text-sm',
      lg: 'px-4 h-8 text-md',
    },
  },
  defaultVariants: {
    variant: 'custom',
    size: 'md',
  },
})

export interface BadgeProps
  extends ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {
  children?: ReactNode
  className?: string
}

export function Badge({
  children,
  variant,
  size,
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      {...props}
      className={`${badgeVariants({ variant, size })} ${className}`}
    >
      {children}
    </div>
  )
}

Badge.className = 'Badge'