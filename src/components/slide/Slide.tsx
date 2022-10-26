import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import H5 from "../Texts/H5";
import ItemSlide from "./ItemSlide";
import ButtonChakra from "../Button/Button";
import Link from "next/link";

import Capa from './../../img/index/capa.jpg'
import CopaCompany from './../../img/index/Ticonnected-01.jpg'
import Image from "next/image";

import CopaCompanyMobile from './../../img/index/Ticonnected-01-mobile.jpg'

export default function Slide() {
  const [isLargerThan1200] = useMediaQuery('min-width:750px')


  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel infinite responsive={responsive}>

      <Box position='relative' bgImage={{ base: 'https://i.imgur.com/Qums2CL.jpg', md: 'https://i.imgur.com/Qums2CL.jpg' }} bgPosition='center' bgSize='cover'>
        {/* <Box position='absolute' w='100%'>
          <Image src={ isLargerThan1200 ? CopaCompany : CopaCompanyMobile } layout='responsive' />
        </Box> */}
        <Box w='100%' h='800px' display='flex' flexDirection='column' alignItems='start' justifyContent='center' ml='10%'>
          <Text as='span' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb={{ base: '0px', lg: '-20px' }} color='white'>Soluções de TI</Text>
          <Text as='h3' fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} fontWeight='extrabold' color='White' >
            Para sua empresa
          </Text>
          <Text color='white'>
            Juntos em um só time para agregar ainda mais<br />
            sua experiência com nossa entrega e atendimento.
          </Text>
        </Box>
      </Box>

      <Box position='relative' bgImage={{ base: 'https://i.imgur.com/PYHW2NE.jpg', md:'https://i.imgur.com/CV0egNJ.jpg' }}  bgPosition='center' bgSize='cover'>
        {/* <Box position='absolute' w='100%' h='80vh'>
          <Image src={Capa} height='800px' />
        </Box> */}
        <Box zIndex={400} w='100%' h='800px' display='flex' flexDirection='column' alignItems='start' justifyContent='center' ml='10%'>
          <Text as='span' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb={{ base: '0px', lg: '-20px' }} color='white'>Sala de</Text>
          <Text as='h3' fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} letterSpacing={0} fontWeight='extrabold' color='White' >
            Reunião inteligente
          </Text>
          <Text color='white'>
            Transforme qualquer espaço em uma sala de<br />
            reunião inteligente.
          </Text>
          <Link href='/produtos/plataforma-de-videoconferencia'>
            <ButtonChakra px='60px' bgColor='Green.300' mt='10px'>Aproveitar</ButtonChakra>
          </Link>
        </Box>
      </Box>


    </Carousel >
  )
}