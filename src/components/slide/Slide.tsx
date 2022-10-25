import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Text } from "@chakra-ui/react";
import H5 from "../Texts/H5";
import ItemSlide from "./ItemSlide";
import ButtonChakra from "../Button/Button";
import Link from "next/link";

import Capa from './../../img/index/capa.jpg'
import CopaCompany from './../../img/index/Ticonnected-01.jpg'
import Image from "next/image";


export default function Slide() {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel infinite responsive={responsive}>

      <Box position='relative' h='80vh'>
        <Box position='absolute' w='100%' h='80vh'>
          <Image src={CopaCompany} height='800px' />
        </Box>
        <Box position='absolute' zIndex={400} w='100%' h='80vh' display='flex' flexDirection='column' alignItems='start' justifyContent='center' ml='10%'>
          <Text as='span' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb='-20px' color='white'>Soluções de TI</Text>
          <Text as='h3' fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} letterSpacing={0} fontWeight='extrabold' color='White' >
            Para sua empresa
          </Text>
          <Text color='white'>
            Juntos em um só time para agregar ainda mais<br />
            sua experiência com nossa entrega e atendimento.
          </Text>
        </Box>
      </Box>

      <Box position='relative' h='80vh'>
        <Box position='absolute' w='100%' h='80vh'>
          <Image src={Capa} height='800px' />
        </Box>
        <Box position='absolute' zIndex={400} w='100%' h='80vh' display='flex' flexDirection='column' alignItems='start' justifyContent='center' ml='10%'>
          <Text as='span' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb='-20px' color='white'>Sala de</Text>
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


    </Carousel>
  )
}