import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Text } from "@chakra-ui/react";
import H5 from "../Texts/H5";
import ItemSlide from "./ItemSlide";
import ButtonChakra from "../Button/Button";
import Link from "next/link";


export default function Slide() {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel infinite responsive={responsive}>
      <ItemSlide backgroundImage='https://i.imgur.com/CV0egNJ.jpg'>
        <Text as='span' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb='-20px'>Sala de</Text>
        <Text as='h3' fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} letterSpacing={0} fontWeight='extrabold' color='White' >
          Reunião inteligente
        </Text>
        <Text>
          Transforme qualquer espaço em uma sala de<br />
          reunião inteligente.
        </Text>
        <Link href='/produtos/plataforma-de-videoconferencia'>
          <ButtonChakra px='60px' bgColor='Green.300' mt='10px'>Aproveitar</ButtonChakra>
        </Link>
      </ItemSlide>
      <ItemSlide backgroundImage='https://i.imgur.com/dtGbCTa.jpg'>
        <H5 color='white' mb='-2'>Soluções de TI</H5>
        <Text as='h3' fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} letterSpacing={0} fontWeight='extrabold' color='White' >
          Para sua empresa
        </Text>
        <Text>
          Juntos em um só time para agregar ainda mais<br />
          sua experiência com nossa entrega e atendimento.
        </Text>

      </ItemSlide>
    </Carousel>
  )
}