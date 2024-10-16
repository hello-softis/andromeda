import type { ReactNode, ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import React from 'react'

const breadcrumbVariants = tv({
  base: 'flex items-center gap-1 overflow-hidden text-sm text-grey-500 dark:text-grey-300',
  variants: {
    disabled: {
      false: '',
      true: 'opacity-50 pointer-events-none',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export interface BreadcrumbProps
  extends ComponentProps<'button'>,
    VariantProps<typeof breadcrumbVariants> {
  children?: ReactNode
  className?: string
  crumbs: Array<string>
  link?: Array<string>
  disabled?: boolean
}

export function Breadcrumb({
  crumbs,
  link,
  disabled,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${breadcrumbVariants({ disabled })} ${className}`}
    >
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <a
            href={link ? link[index] : '#'}
            className={`whitespace-nowrap transition-colors min-w-[24px] overflow-hidden text-ellipsis ${
              index === crumbs.length - 1
                ? 'font-semibold text-grey-800 dark:text-zinc-50'
                : ''
            }`}
          >
            {crumb}
          </a>
          {index < crumbs.length - 1 && (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-3.5 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </React.Fragment>
      ))}
    </button>
  )
}