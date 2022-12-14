import { Box, Divider, Flex, Grid, GridItem, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular } from "react-icons/ti";


export default function Footer() {

  return (
    <Box as='footer' bg='Blue.800' >
      <Grid
        bgColor='Blue.800'
        gridTemplateColumns={{ base: '1fr', sm: ' 1fr 1fr', lg: '1fr 1fr 1fr' }}
        p={{ base: '50px 5%', sm: '5% 10%', lg: '5% 15%' }}
        mt='0px'>
        <GridItem mb={{ base: '20px', sm: '0px' }}>
          <Text fontWeight='bold' color='white'>Contato</Text>
          <Stack spacing={1}>
            <Text mt='2' fontWeight='light' color='white'>contato@simcompany.com</Text>
            <Text fontWeight='light' color='white'>(11) 5039-9046</Text>
          </Stack>

          <HStack mt='8'>
            <Icon as={TiSocialFacebookCircular} color='white' fontSize='30' />
            <Icon as={RiInstagramLine} mt='0.5' color='white' fontSize='26' />
            <Icon as={TiSocialLinkedinCircular} color='white' fontSize='30' />
          </HStack>
        </GridItem>

        <GridItem mb={{ base: '20px', sm: '0px' }}>
          <Text fontWeight='bold' color='white' mb='2'>Comunicação</Text>
          <Stack spacing={2} color='white'>
            <Link href='/produtos/central-de-atendimento'>
              <Text cursor='pointer'>Central de atendimento</Text>
            </Link>
            <Link href='/produtos/plataforma-de-videoconferencia'>
              <Text cursor='pointer'>Videoconferência</Text>
            </Link>
            <Link href='/produtos/plataforma-para-eventos'>
              <Text cursor='pointer'>Eventos virtuais</Text>
            </Link>
            <Link href='/hardware-para-conferencias'>
              <Text cursor='pointer'>Hardware para conferência</Text>
            </Link>
            <Link href='/produtos/pabx-em-nuvem'>
              <Text cursor='pointer'>PABX em nuvem</Text>
            </Link>
          </Stack>
        </GridItem>

        <GridItem mb={{ base: '20px', sm: '0px' }}>
          <Text fontWeight='bold' color='white'>Acesso Remoto</Text>
          <Stack spacing={1} color='white'>
            <Text mt='2'>TI remota</Text>
            <Text>Acesso remoto</Text>
            <Text>Monitoramento</Text>
            <Text>Suporte de TI</Text>
            <Text>GoToMyPC</Text>
            <Text>GoToAssist</Text>
          </Stack>
        </GridItem>

      </Grid>

      <Divider mt='-19px' orientation='horizontal' />

      <Flex color='white' fontSize='12px' mx={{ sm: '5%' }} textAlign='center' p='1px' flexDirection='column'>
        <Text>Desenvolvido por Isaques Estúdios | Todos os Direitos Reservados a Sim Company®</Text>
        <Text>Política de Privacidade e Termos de uso</Text>
        <Text>Tecnologia Utilizada: NextJs</Text>
      </Flex>

    </Box>
  )
}