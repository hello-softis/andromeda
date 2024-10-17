import type { ReactNode, ComponentProps } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

export interface TooltipRootProps extends ComponentProps<typeof Tooltip.Root> {
  children?: ReactNode
  className?: string
}

export function TooltipProvider({
  children,
}: ComponentProps<typeof Tooltip.Provider>) {
  return <Tooltip.Provider>{children}</Tooltip.Provider>
}

export function TooltipRoot({ children }: TooltipRootProps) {
  return <Tooltip.Root>{children}</Tooltip.Root>
}

export function TooltipTrigger({
  children,
  className,
}: ComponentProps<typeof Tooltip.Trigger>) {
  return (
    <Tooltip.Trigger asChild className={`antialiased border-none ${className}`}>
      {children}
    </Tooltip.Trigger>
  )
}

export function TooltipPortal({
  children,
}: ComponentProps<typeof Tooltip.Portal>) {
  return <Tooltip.Portal>{children}</Tooltip.Portal>
}

export function TooltipContent({
  children,
  className,
}: ComponentProps<typeof Tooltip.Content>) {
  return (
    <Tooltip.Content
      sideOffset={5}
      className={`select-none flex flex-col items-center py-3 px-4 w-[210px] bg-slate-100 dark:bg-grey-800 rounded-sm will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade antialiased border-none ${className}`}
    >
      {children}
    </Tooltip.Content>
  )
}

export function TooltipArrow() {
  return (
    <Tooltip.Arrow className="fill-slate-100 dark:fill-grey-800 border-none mb-[1px]" />
  )
}

TooltipRoot.displayName = 'TooltipRoot'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipPortal.displayName = 'TooltipPortal'
TooltipContent.displayName = 'TooltipContent'
TooltipArrow.displayName = 'TooltipArrow'