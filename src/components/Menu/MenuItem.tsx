import { Link as ChakraLink, LinkProps, Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface MenuItem extends TextProps {
  children: ReactNode,
  link?: any,
}

export default function MenuItem({ children, link, ...rest }: MenuItem) {
  return (
    <Link href={link} >
      <Text cursor='pointer' textAlign='start' transition='0.5s' _hover={{ ml: '2px', fontSize: '27px', transition: '0.5s' }} {...rest}>
        {children}
      </Text>
    </Link>
  )
}