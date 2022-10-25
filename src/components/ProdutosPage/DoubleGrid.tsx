import { Box, Flex, FlexProps, Grid, GridItem, GridProps } from "@chakra-ui/react";
import Image from "next/image";

import { ReactNode } from 'react'

interface DoubleGridProps extends FlexProps {
  children: ReactNode
  urlImage: any

}


export default function DoubleGrid({ children, urlImage, ...rest }: DoubleGridProps) {

  return (
    <Flex mx={{ base: '5%', md: '10%' }} w={{ base: '90%', md: '80%' }} {...rest} alignItems='center' >
      <Box mx='2.5%' alignContent='center' justifyContent='center' flex='1'>
        <Image src={urlImage} />
      </Box>

      <Box mx='2.5%' my={{ base: '10', lg: '0px' }} flex='1'>
        {children}
      </Box>
    </Flex>
  )
}