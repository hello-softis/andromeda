'use client'

import type { ReactNode, ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { useCallback, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@houstonicons/react'

const textAreaVariants = tv({
  base: 'bg-slate-100 dark:bg-grey-800 py-3 px-4 w-full rounded-sm box-border border-2 border-solid border-slate-200 dark:border-grey-700 font-sans font-sm font-medium text-grey-800 dark:text-slate-50 flex items-baseline focus-within:border-softis-mid min-h-20 resize-y antialiased',
  variants: {
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

const inputVariants = tv({
  base: 'group bg-slate-100 dark:bg-grey-800 py-3 px-4 rounded-md box-border border-2 border-solid border-slate-200 dark:border-grey-700 transition-colors duration-300 flex items-center focus-within:border-2 focus-within:border-softis-mid antialiased gap-1',
  variants: {
    disabled: {
      false: '',
      true: 'opacity-50 pointer-events-none',
    },
    invalid: {
      true: '!border-danger-base',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
    invalid: false,
  },
})

export interface TextAreaProps
  extends ComponentProps<'textarea'>,
    VariantProps<typeof textAreaVariants> {
  children?: ReactNode
  disabled?: boolean
  className?: string
}

export interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {
  disabled?: boolean
  invalid?: boolean
  className?: string
}

export function TextArea({ disabled, className, ...props }: TextAreaProps) {
  return (
    <>
      <textarea
        className={`${textAreaVariants({ disabled })} ${className}`}
        {...props}
      />
    </>
  )
}

export function TextField({
  children,
  disabled,
  prefix,
  invalid,
  className,
  ...props
}: InputProps) {
  return (
    <>
      <div className={`${inputVariants({ disabled, invalid })} ${className}`}>
        {!!prefix && (
          <span className="text-grey-400 whitespace-nowrap">{prefix}</span>
        )}
        <input
          {...props}
          className="peer bg-transparent font-sans text-slate-50 border-0 w-full focus:outline-0 placeholder:text-grey-300 disabled:pointer-events-none"
          disabled={disabled}
        />
        {children}
      </div>
    </>
  )
}

export function PasswordField({
  disabled,
  prefix,
  invalid,
  className,
  ...props
}:InputProps)  {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const handleToggleHidePassword = useCallback(() => {
    setIsPasswordHidden((prev) => !prev)
  }, [])

  return (
      <TextField
        {...props}
        type={isPasswordHidden ? 'password' : 'text'}
        placeholder="Enter your password"
        className={`!text-lg w-[300px]`}
        {...{ disabled, prefix, invalid }}
      >
        <div
          onClick={handleToggleHidePassword}
          className="cursor-pointer group-disabled:pointer-events-none"
        >
          {isPasswordHidden ? (
            <ViewIcon color="#c4c4cc" />
          ) : (
            <ViewOffIcon color="#c4c4cc" />
          )}
        </div>
      </TextField>
  )
}