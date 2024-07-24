import { Card } from "./card";
import { CardContent } from "./cardContent";
import { Text } from "../../text"
import type { ReactNode } from "react";

export interface CardTextProps {
  children: ReactNode
}

export function CardText({children}: CardTextProps) {
  return (
    <Text sizes="md" weights="normal">{children}</Text>
  )
}