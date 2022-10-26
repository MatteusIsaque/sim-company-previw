import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ButtonChakra from "../components/Button/Button";
import Track from "../components/ProdutosPage/track";
import Slide from "../components/slide/Slide";
import H3 from "../components/Texts/H3";
import H5 from "../components/Texts/H5";

import mg1 from './../img/index/mg1.png'
import mg2 from './../img/index/mg2.png'
import rodape from './../img/index/sim-company-rodape.png'



export default function Index() {

  return (
    <Box as='main' maxW='1920px' mt='auto'>
      <Box mb='0px'>
        <Slide />
      </Box>
      <Track
        bgColor='Green.300'
        description="Pacotes essenciais para a comunicação empresarial com suporte de TI." />

      <Grid
        mx={{ base: '5%', xl: '10%' }}
        gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
        gridColumnGap={{ base: '0px', sm: '5%' }}
        mb={{ md: '0px', lg: '-25vw' }}
        py={{ base: '50px', xl: '0px' }}
      >
        <Box alignSelf={{ base: 'center', lg: 'start' }}  mt={{ md: '0px', lg: '8vw' }}>
          <H3>
            Suporte para comunicações
          </H3>
          <Text as='p'>
            Uma plataforma tudo-em-um para chamadas,
            reuniões e mensagens, além de webinars,
            treinamento, call center e muito mais para
            apoiar o sucesso do seu negócio.
          </Text>
          <Link href='/produtos/central-de-atendimento'>
            <ButtonChakra mt='4'>Avaliar produtos</ButtonChakra>
          </Link>
        </Box>
        <Box zIndex={1}>
          <Image src={mg1} />
        </Box>
      </Grid>

      <Grid
        gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gridTemplateRows={{ base: '1fr', sm: '1fr' }}
        gridColumnGap={{ base: '0px', sm: '5%' }}
        px={{ base: '5%', xl: '10%' }}
        position={{ base: 'relative' }}
        textAlign={{ base: 'center', lg: 'start' }}
        bgColor='Green.300'

      >
        <GridItem
          textAlign={{ base: 'center', sm: 'start' }}
          py={{ base: '75px', xl: '80px' }}>
          <H3>
            Produtos de
            Ti remota
          </H3>
          <Text as='p'>
            Resolva rapidamente os problemas de
            funcionários e clientes com gerenciamento
            de TI eficiente, acesso remoto e ferramentas
            de suporte, como compartilhamento seguro
            de tela e transferência de arquivos.
          </Text>
          <Link href='/produtos/plataforma-para-eventos'>
            <ButtonChakra bgColor='white' color='Red' px='10' _hover={{ color: 'white', bgColor: 'Blue.800' }} mt='4'>Avaliar produtos</ButtonChakra>
          </Link>
        </GridItem>
        <GridItem>
        </GridItem>
      </Grid>

      <Grid
        px={{ base: '5%', xl: '10%' }}
        py={{ base: '50px', md: '100px' }}
        gridTemplateColumns={{ base: '1fr', md: '40% 1fr' }}
        gridColumnGap={{ base: '0px', sm: '10%' }}

      >
        <GridItem>
          <Image src={mg2} />
        </GridItem>
        <GridItem
          alignSelf='center'
        >
          <H3>
            Acessos
            com segurança
          </H3>
          <Text as='p'>
            Armazene, acesse e preencha senhas
            automaticamente em qualquer dispositivo.
            Logins seguros com autenticação multifator
            (MFA), logon único (SSO) e controles
            administrativos transparentes.
          </Text>
          <ButtonChakra px='10' mt='4'>Avaliar produtos</ButtonChakra>
        </GridItem>
      </Grid>

      <Flex
        flexDirection='column'
        mb='-10px'
      >
        <Box
          color='white'
          bgColor='Blue.800'
          textAlign='center'
          py={{ base: '130px', xl: '150px' }}
          px={{ base: '5%', sm: '10%' }}
          mb={{ base: '-10px' }}
          flex='1'
        >
          <H5 color='white' mb='-2'>Sobre</H5>
          <Text
            as='h3'
            fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
            letterSpacing={0}
            fontWeight='extrabold'
            color='White'

          >Sim Company</Text>
          <Text>Sim Company é mais que uma revenda. É uma integradora de soluções para quem precisa de
            uma infraestrutura ágil e acessível, aplicações e serviços de TI, tais como Virtualização,
            Implantação de Sistemas Operacionais, Storage, Backup, Banco de Dados e muito mais.</Text>
        </Box>
        <Box
          h={{ base: '494px', xl: '550px', '2xl': '780px' }}
          w='100%'
          mt={{ base: '-100px', xl: '-8vw', '2xl': '-152px' }}>
          <Image src={rodape} />
        </Box>
      </Flex>

    </Box>
  )
}