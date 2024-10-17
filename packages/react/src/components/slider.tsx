'use client'

import { ReactNode, ComponentProps, useState, useEffect } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import * as Slider from '@radix-ui/react-slider'

const sliderVariants = tv({
  base: 'relative flex items-center select-none touch-none w-full cursor-grab',
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

export interface SliderProps
  extends ComponentProps<typeof Slider.Root>,
    VariantProps<typeof sliderVariants> {
  children: ReactNode
  className?: string
  disabled?: boolean
  min?: number
  max?: number
}

export function SliderRoot({
  children,
  min = 0,
  max = 100,
  className,
  disabled,
  ...props
}: SliderProps) {
  const [minValue, setMinValue] = useState<number[]>([min])
  const [maxValue, setMaxValue] = useState(max)

  useEffect(() => {
    setMinValue([min])
  }, [min])

  useEffect(() => {
    setMaxValue(max)
  }, [max])

  return (
    <Slider.Root
      {...props}
      max={maxValue}
      defaultValue={minValue}
      className={`${sliderVariants({ disabled })} ${className}`}
    >
      {children}
    </Slider.Root>
  )
}

export function SliderTrack({
  children,
  className,
  ...props
}: ComponentProps<typeof Slider.Track>) {
  return (
    <Slider.Track
      {...props}
      className={`dark:bg-grey-800 bg-slate-300 relative grow rounded-full h-2 ${className}`}
    >
      {children}
    </Slider.Track>
  )
}

export function SliderRange({
  className,
  ...props
}: ComponentProps<typeof Slider.Track>) {
  return (
    <Slider.Range
      {...props}
      className={`absolute bg-softis-mid rounded-full h-full ${className}`}
    />
  )
}

export function SliderThumb({
  className,
}: ComponentProps<typeof Slider.Thumb>) {
  return (
    <Slider.Thumb
      className={`block w-4 h-4 bg-softis-light shadow-softis-mid rounded-[10px] transition-all focus:outline-none hover:shadow-[0_0_0_8px] hover:shadow-[#996dff29] active:shadow-[0_0_0_12px] active:shadow-[#996dff29] active:cursor-grabbing ${className}`}
    />
  )
}

SliderRoot.displayName = 'SliderRoot'
SliderTrack.displayName = 'SliderTrack'
SliderRange.displayName = 'SliderRange'
SliderThumb.displayName = 'SliderThumb'