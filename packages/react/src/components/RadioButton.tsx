'use client'

import { type ReactNode, type ComponentProps, useState, useEffect } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Text } from './text'
import * as RadioGroup from '@radix-ui/react-radio-group'

const radioButtonVariants = tv({
  base: 'flex flex-col gap-4',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export interface RadioButtonProps
  extends ComponentProps<typeof RadioGroup.Root>,
    VariantProps<typeof radioButtonVariants> {
  children?: ReactNode[]
  className?: string
  label?: string
  id?: string
  disabled?: boolean
  defaultChecked?: boolean
  defaultValue: string
}

export interface RadioButtonItemProps
  extends ComponentProps<typeof RadioGroup.Item> {
  value: string
  id: string
  label: string
  className?: string
}

export function RadioButtonRoot({
  children,
  disabled,
  className,
  defaultValue,
  ...props
}: RadioButtonProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  useEffect(() => {
    setSelectedValue(defaultValue)
  }, [defaultValue])

  return (
    <RadioGroup.Root
      className={`${radioButtonVariants({ disabled })} ${className}`}
      value={selectedValue ?? ''}
      onValueChange={setSelectedValue}
      disabled={disabled}
      {...props}
    >
      {children}
    </RadioGroup.Root>
  )
}

export function RadioButtonItem({
  value,
  id,
  label,
  className,
  ...props
}: RadioButtonItemProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <RadioGroup.Item
        className={`bg-white w-6 h-6 rounded-full hover:bg-grey-100 outline-none cursor-default ${className}`}
        value={value}
        id={id}
        {...props}
      >
        <RadioGroup.Indicator
          className={`flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-softis-mid ${className}`}
        />
      </RadioGroup.Item>
      <Text className={`text-white pl-4 ${className}`}>{label}</Text>
    </div>
  )
}
