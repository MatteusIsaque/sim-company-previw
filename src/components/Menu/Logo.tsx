import { Flex, Text } from "@chakra-ui/react";
import Image from 'next/image'
import LogoPNG from './../../img/global/sim-company-logo.png'

type LogoType = {
  w?: string
  h?: string
}



export default function Logo({ w, h }: LogoType) {

  return (
    <Flex alignSelf='center' w={w} h={h}>
      <Image src={LogoPNG} />
    </Flex>
  )
}