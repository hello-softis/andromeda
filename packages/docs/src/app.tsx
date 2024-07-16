interface ButtonProps {
  children: string
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="font-sans bg-softisLight rounded-md p-4">{children}</button>
  )
}
