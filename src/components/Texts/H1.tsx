import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H1Props extends TextProps {
  children: ReactNode
}



export default function H1({ children, ...rest }: H1Props) {

  return (
    <Text as='h1' {...rest}>
      {children}
    </Text>
  )
}