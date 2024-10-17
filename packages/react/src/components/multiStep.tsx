import type { ComponentProps } from 'react'
import { Text } from './text'

export interface MultiStepProps extends ComponentProps<'div'> {
  className?: string
  key?: string | number
  size?: number
  step?: number
  disabled?: boolean
}

export function MultiStep({
  className,
  step = 1,
  size = 1,
}: MultiStepProps) {
  const currentStep = Math.max(0, Math.min(step, size))

  return (
    <div className="active:bg-grey-100">
      <Text className="!text-grey-200 !font-xs">
        Passo {currentStep} de {size}
      </Text>
      <div className={`flex gap-2 mt-1 ${className}`}>
        {Array.from({ length: size }, (_, i) => i + 1).map((currentStep) => (
          <div key={currentStep} className="h-1 flex-1 bg-grey-600 rounded-px">
            <div
              className={`h-full bg-grey-100 rounded-px transition-all duration-500 ${
                currentStep <= step ? 'w-full' : 'w-0'
              }`}
              style={{
                transitionDelay: `${currentStep * 10}ms`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

MultiStep.displayName = 'MultiStep'