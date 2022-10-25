import { Grid, GridItem, Text } from "@chakra-ui/react";
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

import CamPoly from './../../img/comunicacao/camera-poly-sim-company.jpg'
import CalPlay from './../../img/comunicacao/chamada-de-video-online.png'
import ConenctMultPlataform from './../../img/comunicacao/conectividade-em-multiplas-plataformas.jpg'
import KitGoToRom from './../../img/comunicacao/kit-goto-room-sim-company.png'
import Logitech from './../../img/comunicacao/logitech-sim-company-venda.jpg'
import PasswordSystem from './../../img/comunicacao/sistema-de-senha.png'
import Meeting from './../../img/comunicacao/meeting.svg'



export default function Comunicação() {

  return (
    <>
      <Head>
        <title>Produtos - Comunicação | Sim Company</title>
      </Head>

      <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Grid           height='90vh'
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
              Configure em minutos, faça reuniões em segundos
            </H1>
            <Text color='White'>O GoTo Room oferece equipamentos de videoconferência intuitivos e econômicos que ajudam a descomplicar as reuniões.</Text>
            <ButtonChakra mt='6' px='10' py='8'>SOLICITAR DEMONSTRAÇÃO</ButtonChakra>
          </GridItem>
          <GridItem>

          </GridItem>
        </Grid>


        <Track bgColor='Green.300'
          title='Transforme qualquer espaço em uma sala de reunião inteligente'
          description='Hardware de videoconferência intuitivo e fácil de configurar'
        />



        <Grid mt='140px' gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gridTemplateRows='1fr' gridColumnGap='5%' width='75%' mx='12.5%'>
          <PresentationProduction
            urlImage={PasswordSystem}
            title="Personalize sua configuração"
            description="O GoTo é um pacote de hardware e software feito para espaços de qualquer tamanho."
          />
          <PresentationProduction
            my={{ base: '14', md: '0' }}
            urlImage={KitGoToRom}
            title="Instalação em 15 minutos"
            description="Os Kits do GoTo Room vem com software pré-configurado e um guia de instalação fácil de seguir."
          />
          <PresentationProduction
            urlImage={CalPlay}
            title="Faça reuniões com o GoTo meeting"
            description="Com as integrações os usuários tem a melhor estabilidade e a interface mais intuitiva do mercado."
          />
        </Grid>



        <Track mt='80px'
          title='Escolha seu equipamento de videoconferência'
          description='Conte com a parceria de renomados fornecedores de hardware para promover reuniões excepcionais.'
        />

        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row' }}
          urlImage={Logitech}
        >
          <Image src={CamPoly} />
        </DoubleGrid>



        <Track mt='80px'
          title='Sua soluções all-in-one para salas de reunião'
          description='Conte com a parceria de renomados fornecedores de hardware para promover reuniões excepcionais.'
        />



        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row' }}
          urlImage={Meeting}
        >
          <H2 color='Blue.800' mb='4'>O GoTo Room funciona em qualquer lugar, do home office ás salas de reunião e da diretoria da empresa</H2>
          <Topics
            title='Kits feitos para salas de qualquer tamanho'
            description='Em nossos kits, você vai encontrar soluções robustas de câmera e áudio para melhorar a qualidade de som e eliminar o eco nas suas reuniões.'
          />
          <Topics
            mt='6'
            title='Compativel com a tela dupla'
            description='Use várias telas para espelhar o conteúdo ou dividir entre as câmeras da sessão e a tela compartilhada.'
          />
          <Topics
            mt='6'
            title='Sincronize salas com o centro de Administração GoTo'
            description='O GoTo Room é adicionado automaticamente ao seu centro de Administração GoTo para agilizar o gerenciamento de todas as suas salas.'
          />
        </DoubleGrid>

        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          my={{ base: '0px', md: '100px', xl: '150px' }}
          urlImage={ConenctMultPlataform}
        >
          <H2 color='Blue.800' mb='4'>Aumente a produtividade com recursos práticos</H2>
          <Topics
            title='Compatível com outras soluções de reunião '
            description='Conecte-se facilmente a clientes ou fornecedores que podem usar outro software de reunião. Com o GoTo Room, você se conecta as reuniões externas com apenas um toque.'
          />
          <Topics
            mt='6'
            title='Vídeo dinâmico e experiência de áudio de alta qualidade'
            description='As soluções para salas de reuniões incluem câmeras inteligentes e recursos de áudio para produzir os ruídos de fundo e proporcionar um som nítido.'
          />
          <Topics
            mt='6'
            title='Sincronize com os calendários da Microsoft ou do Google'
            description='As integrações com calendários mantêm a disponibilidade da sala sempre atualizada, permitindo a entrada em reuniões com apenas um clique.'
          />
          <Topics
            mt='6'
            title='Modo quadro de comunicações'
            description='O Software de câmera se adaptará automaticamente ao quadro branco para que os participantes possam ver com clareza'
          />
        </DoubleGrid>



        <Track mt={{ base: '-50px', md: '0px' }}

          title='Aumente a produtividade com recursos práticos'
          description="Com duas formas de compras exclusivas, sua organização tem a flexibilidade necessária."
        />


        <Grid mx='10%' w='80%' gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} gridTemplateRows='1fr' gridColumnGap='10%'>
          <GridItem mb={{ base: '20' }} justifyContent={{ base: 'center', lg: 'flex-start' }} display='flex' flexDirection='column' textAlign='center'>

            <H3 mt='35'>Mensal Flexível</H3>
            <Text>Novo: O preço mensal flexível do GoTo Room permite que os clientes financiem uma solução de sala de vídeo por uma taxa mensal baixa que cabe em qualquer orçamento. Escolha seu kit e seu modelo de financiamento preferido de 1, 2 ou 3 anos, e comece hoje mesmo.</Text>

            <Text mt='10'> Solicite um orçamento personalizado hoje mesmo!</Text>
            <ButtonChakra py='6' mt='16'>Solicitar orçamento</ButtonChakra>
          </GridItem>

          <GridItem justifyContent={{ base: 'center', lg: 'flex-start' }} display='flex' flexDirection='column' textAlign='center'>

            <H3 mt='35'>Compra padrão</H3>
            <Text>Adquira uma das nossas mais de 10 ofertas do GoTo Room e tenha tudo pronto para suas reuniões em questão de minutos. Os melhores preços do setor e as opções de várias salas ajudam nossos clientes a economizar muito.</Text>

            <Text mt='10'> Solicite um orçamento personalizado hoje mesmo!</Text>
            <ButtonChakra py='6' mt='16'>Solicitar orçamento</ButtonChakra>
          </GridItem>
        </Grid>

      </main>
    </>
  )
}