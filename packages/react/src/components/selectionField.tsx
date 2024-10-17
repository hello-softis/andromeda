'use client'

import { ArrowDown01Icon, Tick02Icon } from '@houstonicons/react'
import * as Select from '@radix-ui/react-select'
import { forwardRef, type ComponentProps, type ReactNode } from 'react'

export interface SelectFieldProps {
  children?: ReactNode
  disabled?: boolean
  placeholder?: string
  value?: string
  className?: string
  ariaLabel?: string
}

export function SelectFieldRoot({
  children,
  ...props
}: ComponentProps<typeof Select.Root> & SelectFieldProps) {
  return <Select.Root {...props}>{children}</Select.Root>
}

export function SelectFieldTrigger({
  children,
  className,
  ariaLabel,
  ...props
}: ComponentProps<typeof Select.Trigger> & SelectFieldProps) {
  return (
    <Select.Trigger
      {...props}
      className={`min-h-12 bg-slate-200 dark:bg-grey-800 border-2 rounded-sm transition-colors flex items-center flex-wrap justify-between outline-none relative box-border focus:border-softis-mid focus:shadow-sm text-gray-800 dark:text-zinc-50 py-1 px-2 gap-2 border-none ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </Select.Trigger>
  )
}

export function SelectFieldValue({
  placeholder,
  className,
  ...props
}: ComponentProps<typeof Select.Value> & SelectFieldProps) {
  return (
    <Select.Value
      {...props}
      placeholder={placeholder}
      className={`placeholder:text-grey-800 placeholder:dark:text-grey-200 placeholder:font-sans placeholder:text-base placeholder:font-normal ${className}`}
    />
  )
}

export function SelectFieldIcon({
  className,
  ...props
}: ComponentProps<typeof Select.Icon> & SelectFieldProps) {
  return (
    <Select.Icon {...props} className={`${className}`}>
      <ArrowDown01Icon size={16} color="white" />
    </Select.Icon>
  )
}

export function SelectFieldPortal({
  children,
  ...props
}: ComponentProps<typeof Select.Portal> & SelectFieldProps) {
  return <Select.Portal {...props}>{children}</Select.Portal>
}

export function SelectFieldContent({
  children,
  className,
  ...props
}: ComponentProps<typeof Select.Content> & SelectFieldProps) {
  return (
    <Select.Content {...props} className={`z-20 p-0 ${className}`}>
      {children}
    </Select.Content>
  )
}

export function SelectFieldViewPort({
  children,
  className,
  ...props
}: ComponentProps<typeof Select.Viewport> & SelectFieldProps) {
  return (
    <Select.Viewport
      {...props}
      className={`z-20 p-4 h-12 box-border font-normal text-text-title flex items-center bg-grey-800 rounded-sm w-max justify-start ${className}`}
    >
      {children}
    </Select.Viewport>
  )
}

export function SelectedFieldGroup({
  children,
  className,
  ...props
}: ComponentProps<typeof Select.Group> & SelectFieldProps) {
  return (
    <Select.Group {...props} className={`flex flex-col gap-1 ${className}`}>
      {children}
    </Select.Group>
  )
}

export function SelectedFieldLabel({
  children,
  className,
  ...props
}: ComponentProps<typeof Select.Label> & SelectFieldProps) {
  return (
    <Select.Label {...props} className={`${className}`}>
      {children}
    </Select.Label>
  )
}

export const SelectedFieldItem = forwardRef<
  HTMLDivElement,
  { children: ReactNode; value: string; className?: string }
>(function SelectedFieldItem({ children, value, className, ...props }, ref) {
  return (
    <Select.Item
      {...props}
      ref={ref}
      value={value}
      className={`flex items-center gap-2 px-4 py-1 h-12 box-border bg-slate-100 dark:bg-grey-800 text-sm font-normal text-grey-800 dark:text-text-title border-t border-t-slate-200 dark:border-t-grey-700 outline-none border-none dark:data-[state=checked]:bg-grey-700 data-[state=checked]:bg-slate-400 rounded-sm ${className}`}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <SelectedFieldIndicator />
    </Select.Item>
  )
})

export function SelectedFieldIndicator({
  className,
  ...props
}: ComponentProps<typeof Select.ItemIndicator> & SelectFieldProps) {
  return (
    <Select.ItemIndicator {...props} className={`${className}`}>
      <Tick02Icon color="white" strokeWidth={2} variant="solid" />
    </Select.ItemIndicator>
  )
}

export function SelectFieldSeparator({
  children,
  className,
  ...props
}: ComponentProps<typeof Select.Separator> & SelectFieldProps) {
  return (
    <Select.Separator {...props} className={`m-1 h-1 bg-grey-600 ${className}`}>
      {children}
    </Select.Separator>
  )
}

SelectFieldRoot.displayName = 'SelectField.Root'
SelectFieldTrigger.displayName = 'SelectField.Trigger'
SelectFieldValue.displayName = 'SelectField.Value'
SelectFieldIcon.displayName = 'SelectField.Icon'
SelectFieldPortal.displayName = 'SelectField.Portal'
SelectFieldContent.displayName = 'SelectField.Content'
SelectFieldViewPort.displayName = 'SelectField.Viewport'
SelectedFieldGroup.displayName = 'SelectField.Group'
SelectedFieldLabel.displayName = 'SelectField.Label'
SelectedFieldItem.displayName = 'SelectField.Item'
SelectedFieldIndicator.displayName = 'SelectField.Indicator'
SelectFieldSeparator.displayName = 'SelectField.Separator'