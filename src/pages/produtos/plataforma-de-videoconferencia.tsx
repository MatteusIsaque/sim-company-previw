import { Flex, Grid, GridItem, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import ButtonChakra from "../../components/Button/Button";
import Topics from "../../components/Information/Topics";
import DoubleGrid from "../../components/ProdutosPage/DoubleGrid";
import PresentationProduction from "../../components/ProdutosPage/PresentationProduction";
import Track from "../../components/ProdutosPage/track";
import H1 from "../../components/Texts/H1";
import H2 from "../../components/Texts/H2";
import H3 from "../../components/Texts/H3";

import { MdCheckCircle } from 'react-icons/md'

import SpeedAndSecurity from './../../img/plataforma-de-videoconferência/rapidez-e-segurança-sim-company.jpg'
import Admin from './../../img/plataforma-de-videoconferência/administração-sim-company.jpg'
import AudioQuality from './../../img/comunicacao/conectividade-em-multiplas-plataformas.jpg'
import Call from './../../img/plataforma-de-videoconferência/conferencia-online.jpg'
import Conect from './../../img/plataforma-de-videoconferência/conexão-mundial.jpg'
import H5 from "../../components/Texts/H5";



export default function PlataformaVideoconferencia() {

  return (
    <>
      <Head>
        <title>Produtos - Plataforma de Videoconferência | Sim Company</title>
      </Head>

      <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Grid height='90vh'
          alignItems='center'
          px='10%'
          w='100%'
          backgroundImage="url('https://i.imgur.com/F0X4at7.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' mb='20px' fontSize='4xl' color='White' fontWeight='extrabold' >
              reuniões online simplificado
              com a segurança das
              grandes empresas
            </H1>
            <Text color='White'>Software de reuniões online simplificado com a segurança das grandes
              empresas, liberdade e praticidade.</Text>
            <ButtonChakra mt='6' px='10' py='8'>SOLICITAR DEMONSTRAÇÃO</ButtonChakra>
          </GridItem>
          <GridItem>

          </GridItem>
        </Grid>


        <Track bgColor='Green.300'
          title='Realizar reuniões online de nivél empresarial'
          description='Uma plataforma de reunião virtual para o trabalho flexível.'
        />



        <Grid mt='140px' gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gridTemplateRows='1fr' gridColumnGap='5%' width='75%' mx='12.5%'>
          <PresentationProduction
            urlImage={SpeedAndSecurity}
            title="Rapidez e Segurança"
            description="As reuniões virtuais estão mais fáceis do que nunca. Realize chamadas sem precisar baixar nada."
          />
          <PresentationProduction
            my={{ base: '14', md: '0' }}
            urlImage={Admin}
            title="Administração"
            description="Com gerenciamento unificado em todos os produtos GoTo, é fácil hospedar, gerenciar, monitorar e dar suporte aos usuários."
          />
          <PresentationProduction
            urlImage={AudioQuality}
            title="Qualidade de áudio HD"
            description="Use supressão de ruído de fundo e áudio integrado para VoIP e chamadas para dar aos participantes a melhor experiência de áudio possível.
            t."
          />
        </Grid>


        <Flex flexDirection='column' alignItems='center' my='80px'>
          <H3 textAlign={{ base: 'center' }} mb='20px'>Solicite um orçamento com a Sim Company</H3>
          <ButtonChakra px='60px' py='24px'>Fazer um orçamento</ButtonChakra>
        </Flex>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={Conect}
        >
          <Topics
            textAlign={{ base: 'center', lg: "end" }}
            paragraphPosition={{ base: 'center', lg: "end" }}
            mt='6'
            title='Priorizando a segurança dos usúarios'
            description='Mais de 80 milhões de reuniões online por ano: todas contando com a mesma segurança de nível empresarial.'
          />
        </DoubleGrid>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row' }}
          urlImage={Call}
        >
          <Topics
            title='Compatível com outras soluções de reunião '
            description='Conecte-se facilmente a clientes ou fornecedores que podem usar outro software de reunião. Com o GoTo Room, você se conecta as reuniões externas com apenas um toque.'
          />
        </DoubleGrid>



        <Track mt={{ base: '25px', md: '100px' }}
          title='Confira os benefícios que acompanham nossos planos'
          description="Repleto de recursos projetados para você ter a melhor experiência de conferência na web"
        />

        <Grid
          gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
          gridColumnGap={{ sm: '5%' }}
          mx={{ base: '10%' }}
          maxW={{ base: '90%', sm: '80%' }}
          mt={{ base: '0px', sm: '50px' }}

        >
          <GridItem my={{ base: '20px' }}>
            <H5 mb='4'>Videoconferências</H5>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Vídeo em HD
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Pré-visualização da webcam
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Compartilhamento de tela
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Ferramentas de desenho
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Compartilhamento de controles de teclado e mouse
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Bate-papo na sessão
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Reuniões com um clique
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Não precisa baixar nada
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Mesa-redonda
              </ListItem>
            </List>
          </GridItem>

          <GridItem my={{ base: '20px' }}>
            <H5 mb='4'>Melhore o áudio</H5>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Áudio nítido
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Moda em trânsito
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Áudio integrado com VoiP e ligações pagas
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Supressão de ruídos de fundo
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Ligações gratuitas e Call Me(disponível em mais de 50 países)
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Conferências por dispositivos móveis
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Chamadas de conferência
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Ligação externa
              </ListItem>
            </List>
          </GridItem>

          <GridItem my={{ base: '20px' }}>
            <H5 mb='4'>Segurança avançada</H5>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Login único
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Sessões criptografadas
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Remoção de participantes
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Bloqueio de reunião
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                EM BREVE: Criptografia de ponta a ponta
              </ListItem>
            </List>
          </GridItem>

          <GridItem my={{ base: '20px' }}>
            <H5 mb='4'>Segurança avançada</H5>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Integrações perfeitas
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Disponível em mais de 190 países
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Até 250 participantes
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Grave reuniões na nuvem
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Transcrições de reuniões
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Modelos personalizáveis de e-mails
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Gravações e transcrições
              </ListItem>
            </List>
          </GridItem>
        </Grid>

      </main>
    </>
  )
}