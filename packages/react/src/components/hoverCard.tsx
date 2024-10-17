import type { ComponentProps, ReactNode } from 'react'
import * as HoverCard from '@radix-ui/react-hover-card'

export interface HoverCardProps{
  children?: ReactNode
}

export function HoverCardRoot({
  children,
}: ComponentProps<typeof HoverCard.Root>) {
  return <HoverCard.Root>{children}</HoverCard.Root>
}

export function HoverCardTrigger({
  children,
}: ComponentProps<typeof HoverCard.Trigger>) {
  return <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
}

export function HoverCardPortal({
  children,
}: ComponentProps<typeof HoverCard.Portal>) {
  return <HoverCard.Portal>{children}</HoverCard.Portal>
}

export function HoverCardContent({
  children,
  className,
}: ComponentProps<typeof HoverCard.Content>) {
  return (
    <HoverCard.Content
      align="center"
      className={`bg-slate-200 dark:bg-grey-800 border-2 border-slate-300 dark:border-grey-700 rounded-sm flex flex-col items-center py-8 px-[3.125rem] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all ${className}`}
    >
      {children}
    </HoverCard.Content>
  )
}

export function HoverCardArrow() {
  return <HoverCard.Arrow className="fill-slate-200 dark:fill-grey-800" />
}


HoverCardRoot.displayName = 'HoverCardRoot'
HoverCardTrigger.displayName = 'HoverCardTrigger'
HoverCardPortal.displayName = 'HoverCardPortal' 
HoverCardContent.displayName = 'HoverCardContent'
HoverCardArrow.displayName = 'HoverCardArrow'