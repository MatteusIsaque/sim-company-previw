import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H3Props extends TextProps {
  children: ReactNode
}



export default function H5({ children, ...rest }: H3Props) {

  return (
    <Text as='h5' color='Blue.800' fontSize={{ base: 'xl', md: 'xl', lg: 'xl' }} letterSpacing={0} fontWeight='bold'  {...rest}>
      {children}
    </Text>
  )
}