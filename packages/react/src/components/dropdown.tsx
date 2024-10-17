import type { ReactNode, ComponentProps } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export interface DropdownProps {
  children?: ReactNode
  className?: string
  value?: string
}

export function DropdownRoot({
  children,
  ...props
}: ComponentProps<typeof DropdownMenu.Root> & DropdownProps) {
  return <DropdownMenu.Root {...props}>{children}</DropdownMenu.Root>
}

export function DropdownTrigger({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.Trigger> & DropdownProps) {
  return (
    <DropdownMenu.Trigger asChild className={`${className}`} {...props}>
      {children}
    </DropdownMenu.Trigger>
  )
}

export function DropdownPortal({
  children,
  ...props
}: ComponentProps<typeof DropdownMenu.Portal> & DropdownProps) {
  return <DropdownMenu.Portal {...props}>{children}</DropdownMenu.Portal>
}

export function DropdownContent({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.Content> & DropdownProps) {
  return (
    <DropdownMenu.Content
      {...props}
      sideOffset={5}
      side='right'
      className={`bg-slate-100 dark:bg-grey-800 rounded-sm ${className}`}
    >
      {children}
    </DropdownMenu.Content>
  )
}

export function DropdownLabel({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.Label> & DropdownProps) {
  return (
    <DropdownMenu.Label
      {...props}
      className={`group py-3 px-4 min-w-[140px] ${className}`}
    >
      {children}
    </DropdownMenu.Label>
  )
}

export function DropdownItem({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.Item> & DropdownProps) {
  return (
    <DropdownMenu.Item
      className={`group py-3 px-4 min-w-[140px] border-none outline-none ${className}`}
      {...props}
    >
      {children}
    </DropdownMenu.Item>
  )
}

export function DropdownGroup({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.Group> & DropdownProps) {
  return (
    <DropdownMenu.Group className={`${className}`} {...props}>
      {children}
    </DropdownMenu.Group>
  )
}

export function DropdownCheckboxItem({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.CheckboxItem> & DropdownProps) {
  return (
    <DropdownMenu.CheckboxItem
      {...props}
      className={`py-3 px-4 min-w-[140px] flex gap-2 items-center border-none outline-none ${className}`}
    >
      {children}
    </DropdownMenu.CheckboxItem>
  )
}

export function DropdownRadioGroup({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.RadioGroup> & DropdownProps) {
  return (
    <DropdownMenu.RadioGroup className={`${className}`} {...props}>
      {children}
    </DropdownMenu.RadioGroup>
  )
}

export function DropdownRadioItem({
  children,
  className,
  value,
  ...props
}: ComponentProps<typeof DropdownMenu.RadioItem> & DropdownProps) {
  return (
    <DropdownMenu.RadioItem
      value={value}
      className={`py-3 px-4 min-w-[140px] flex gap-2 items-center border-none outline-none ${className}`}
      {...props}
    >
      {children}
    </DropdownMenu.RadioItem>
  )
}

export function DropdownItemIndicator({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.ItemIndicator> & DropdownProps) {
  return (
    <DropdownMenu.ItemIndicator
      className={`border-none outline-none ${className}`}
      {...props}
    >
      {children}
    </DropdownMenu.ItemIndicator>
  )
}

export function DropdownSeparator({
  className,
  ...props
}: ComponentProps<typeof DropdownMenu.Separator> & DropdownProps) {
  return (
    <DropdownMenu.Separator
      {...props}
      className={`m-1 h-px bg-grey-600 ${className}`}
    />
  )
}

DropdownRoot.displayName = 'DropdownRoot'
DropdownTrigger.displayName = 'DropdownTrigger'
DropdownPortal.displayName = 'DropdownPortal'
DropdownContent.displayName = 'DropdownContent'
DropdownLabel.displayName = 'DropdownLabel'
DropdownItem.displayName = 'DropdownItem'
DropdownGroup.displayName = 'DropdownGroup'
DropdownCheckboxItem.displayName = 'DropdownCheckboxItem'
DropdownRadioGroup.displayName = 'DropdownRadioGroup'
DropdownRadioItem.displayName = 'DropdownRadioItem'
DropdownItemIndicator.displayName = 'DropdownItemIndicator'
DropdownSeparator.displayName = 'DropdownSeparator'
