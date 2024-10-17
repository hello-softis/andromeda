import type { ReactNode, ComponentProps } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export interface ModalProps {
  children?: ReactNode
  className?: string
}

export function ModalRoot({
  children,
}: ComponentProps<typeof Dialog.Root> & ModalProps) {
  return <Dialog.Root>{children}</Dialog.Root>
}

export function ModalTrigger({
  children,
}: ComponentProps<typeof Dialog.Trigger> & ModalProps) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>
}

export function ModalPortal({
  children,
}: ComponentProps<typeof Dialog.Portal> & ModalProps) {
  return <Dialog.Portal>{children}</Dialog.Portal>
}

export function ModalOverlay() {
  return <Dialog.Overlay className={`fixed inset-0 z-20 bg-black`} />
}

export function ModalContent({
  children,
  className,
}: ComponentProps<typeof Dialog.Content> & ModalProps) {
  return (
    <Dialog.Content
      className={`max-w-[700px] flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vh] z-50 rounded-sm bg-slate-100 dark:bg-shape-secondary max-h-[50vh]`}
    >
      <div className={`p-8 overflow-y-auto ${className}`}>{children}</div>
    </Dialog.Content>
  )
}

export function ModalTitle({
  children,
  className,
}: ComponentProps<typeof Dialog.Title> & ModalProps) {
  return <Dialog.Title className={`${className}`}>{children}</Dialog.Title>
}

export function ModalDescription({
  children,
  className,
}: ComponentProps<typeof Dialog.Description> & ModalProps) {
  return (
    <Dialog.Description className={`${className}`}>
      {children}
    </Dialog.Description>
  )
}

export function ModalActions({
  children,
  className,
}: ComponentProps<'div'> & ModalProps) {
  return (
    <div
      className={`justify-end border-t border-slate-200 dark:border-grey-600 bg-slate-100 dark:bg-shape-secondary flex items-center gap-2 p-8 sticky ${className}`}
    >
      {children}
    </div>
  )
}

export function ModalClose({
  children,
  className,
}: ComponentProps<typeof Dialog.Close> & ModalProps) {
  return <Dialog.Close className={`${className}`}>{children}</Dialog.Close>
}

ModalRoot.displayName = 'ModalRoot'
ModalTrigger.displayName = 'ModalTrigger'
ModalPortal.displayName = 'ModalPortal'
ModalOverlay.displayName = 'ModalOverlay'
ModalContent.displayName = 'ModalContent'
ModalTitle.displayName = 'ModalTitle'
ModalDescription.displayName = 'ModalDescription'
ModalActions.displayName = 'ModalActions'
ModalClose.displayName = 'ModalClose'
