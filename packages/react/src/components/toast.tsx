'use client'

import { Toast, ToastProvider, ToastViewport } from '@andromeda-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from './button'

export interface ToastProps {
  className?: string
  title: string
  description: string
  action?: string
  variant?: 'info' | 'warning' | 'error' | 'success'
  position?: 'center' | 'start' | 'end'
}

export function ToastRoot({
  className,
  title,
  description,
  action,
  variant = 'info',
  position = 'center',
}: ToastProps) {
  const [open, setOpen] = useState(false)

  const timerRef = useRef(0)

  const handleShowToast = useCallback(() => {
    setOpen(false)
    window.clearTimeout(timerRef.current)

    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }, [])

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <div className={`${className}`}>
      <ToastProvider>
        <Button size="lg" onClick={handleShowToast} className="uppercase">
          Show Toast
        </Button>

        <Toast
          title={title}
          description={description}
          onOpenChange={setOpen}
          open={open}
          action={action}
          variant={variant}
        />

        <ToastViewport css={{ alignItems: position }} />
      </ToastProvider>
    </div>
  )
}

ToastRoot.displayName = 'Toast'
