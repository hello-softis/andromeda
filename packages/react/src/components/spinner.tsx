import type { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const checkboxVariants = tv({
  base: 'border-solid border-comet-300/50 border-t-comet-300 rounded-full animate-spin',
  variants: {
    sizes: {
      sm: 'w-3 h-3 border-[2px] border-t-[2px]',
      md: 'w-4 h-4 border-[2px] border-t-[2px]',
      lg: 'w-6 h-6 border-[3px] border-t-[3px]',
      xl: 'w-8 h-8 border-[3px] border-t-[3px]'
    },
    colors: {
      'softis-light': 'border-softis-light/50 border-t-softis-light',
      'softis-mid': 'border-softis-mid/50 border-t-softis-mid',
      'softis-dark': 'border-softis-dark/50 border-t-softis-dark',
      'softis-low': 'border-softis-low/50 border-t-softis-low',
      'comet-50': 'border-comet-50/50 border-t-comet-50',
      'comet-100': 'border-comet-100/50 border-t-comet-100',
      'comet-200': 'border-comet-200/50 border-t-comet-200',
      'comet-300': 'border-comet-300/50 border-t-comet-300',
      'comet-400': 'border-comet-400/50 border-t-comet-400',
      'comet-500': 'border-comet-500/50 border-t-comet-500',
      'comet-600': 'border-comet-600/50 border-t-comet-600',
      'comet-700': 'border-comet-700/50 border-t-comet-700',
      'comet-800': 'border-comet-800/50 border-t-comet-800',
      'comet-900': 'border-comet-900/50 border-t-comet-900',
      'comet-950': 'border-comet-950/50 border-t-comet-950',
      'nebula-50': 'border-nebula-50/50 border-t-nebula-50',
      'nebula-100': 'border-nebula-100/50 border-t-nebula-100',
      'nebula-200': 'border-nebula-200/50 border-t-nebula-200',
      'nebula-300': 'border-nebula-300/50 border-t-nebula-300',
      'nebula-400': 'border-nebula-400/50 border-t-nebula-400',
      'nebula-500': 'border-nebula-500/50 border-t-nebula-500',
      'nebula-600': 'border-nebula-600/50 border-t-nebula-600',
      'nebula-700': 'border-nebula-700/50 border-t-nebula-700',
      'nebula-800': 'border-nebula-800/50 border-t-nebula-800',
      'nebula-900': 'border-nebula-900/50 border-t-nebula-900',
      'nebula-950': 'border-nebula-950/50 border-t-nebula-950',
      'success-light': 'border-success-light/50 border-t-success-light',
      'success-base': 'border-success-base/50 border-t-success-base',
      'success-low': 'border-success-low/50 border-t-success-low',
      'danger-light': 'border-danger-light/50 border-t-danger-light',
      'danger-base': 'border-danger-base/50 border-t-danger-base',
      'danger-low': 'border-danger-low/50 border-t-danger-low',
      'warning-light': 'border-warning-light/50 border-t-warning-light',
      'warning-base': 'border-warning-base/50 border-t-warning-base',
      'warning-low': 'border-warning-low/50 border-t-warning-low',
      'new-light': 'border-new-light/50 border-t-new-light',
      'new-base': 'border-new-base/50 border-t-new-base',
      'new-low': 'border-new-low/50 border-t-new-low',
      'black': 'border-black/50 border-t-black',
      'white': 'border-white/50 border-t-white',
      'grey-50': 'border-grey-50/50 border-t-grey-50',
      'grey-100': 'border-grey-100/50 border-t-grey-100',
      'grey-200': 'border-grey-200/50 border-t-grey-200',
      'grey-300': 'border-grey-300/50 border-t-grey-300',
      'grey-400': 'border-grey-400/50 border-t-grey-400',
      'grey-500': 'border-grey-500/50 border-t-grey-500',
      'grey-600': 'border-grey-600/50 border-t-grey-600',
      'grey-700': 'border-grey-700/50 border-t-grey-700',
      'grey-800': 'border-grey-800/50 border-t-grey-800',
      'grey-900': 'border-grey-900/50 border-t-grey-900',
      'grey-950': 'border-grey-950/50 border-t-grey-950',
      'text-title': 'border-text-title/50 border-t-text-title',
      'text-base': 'border-text-base/50 border-t-text-base',
      'text-support': 'border-text-support/50 border-t-text-support',
      'placeholder': 'border-placeholder/50 border-t-placeholder',
      'inputs-icons': 'border-inputs-icons/50 border-t-inputs-icons',
      'shape-tertiary': 'border-shape-tertiary/50 border-t-shape-tertiary',
      'shape-secondary': 'border-shape-secondary/50 border-t-shape-secondary',
      'shape-primary': 'border-shape-primary/50 border-t-shape-primary',
      'color-background': 'border-color-background/50 border-t-color-background',
    }
  },
  defaultVariants: {
    sizes: 'md',
    colors: 'nebula-500'
  }
})

export interface SpinnerProps extends ComponentProps<'div'>, VariantProps<typeof checkboxVariants> {}

export function Spinner({ sizes, colors }: SpinnerProps) {
  return (
    <div className={checkboxVariants({ sizes, colors })}></div>
  )
}
