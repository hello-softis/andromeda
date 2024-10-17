import { ProgressBar as ProgressBarBase } from '@andromeda-ui/react'

export interface ProgressBarProps {
  value: number
  max?: number
  size?: 'sm' | 'md'
  label?: string
  labelPosition?: 'left' | 'right'
}

export function ProgressBar({
  value,
  max,
  size,
  label,
  labelPosition,
}: ProgressBarProps) {
  return (
    <ProgressBarBase
      value={value}
      max={max}
      size={size}
      label={label}
      labelPosition={labelPosition}
    />
  )
}

ProgressBar.displayName = 'ProgressBar'