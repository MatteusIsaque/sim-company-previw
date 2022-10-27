import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import ButtonChakra from "../../components/Button/Button";
import Topics from "../../components/Information/Topics";
import DoubleGrid from "../../components/ProdutosPage/DoubleGrid";
import PresentationProduction from "../../components/ProdutosPage/PresentationProduction";
import Track from "../../components/ProdutosPage/track";
import H1 from "../../components/Texts/H1";
import H3 from "../../components/Texts/H3";


import Can from './../../img/pabx/camera.jpg'
import BranchCall from './../../img/pabx/chamadas.jpg'
import Group04 from './../../img/pabx/grup04.jpg'
import Group05 from './../../img/pabx/grup05.jpg'
import Group06 from './../../img/pabx/grup06.jpg'
import Dashboard from './../../img/pabx/painel.jpg'


export default function Pabx() {

  return (
    <>
      <Head>
        <title>Produtos - PABX | Sim Company</title>
      </Head>

      <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Grid
          height='80vh'
          alignItems='center'
          px='10%'
          w='100%'
          backgroundImage="url('https://i.imgur.com/F9pafmW.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' mb='20px' fontSize='4xl' color='White' fontWeight='extrabold' >
              A conexão que sua empresa precisa.
            </H1>
            <Text color='white'>
              Sistema completo e flexível que atende as suas necessidades diárias,
              Telefonia em nuvem com sistema integrado de reuniões e mensagens.
            </Text>
            <ButtonChakra mt='6' px='10' py='8'>SOLICITAR DEMONSTRAÇÃO</ButtonChakra>
          </GridItem>
          <GridItem>

          </GridItem>
        </Grid>


        <Track bgColor='Green.300'
          title='Telefonia, reuniões e mensagens all-in-one'
          description='Descubra mais'
        />



        <Grid my={{ base: '50px', md: '85px' }} gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gridTemplateRows='1fr' gridColumnGap='5%' width='75%' mx='12.5%'>
          <PresentationProduction
            urlImage={Group04}
            title="Fácil intalação e configuração"
            description="Você ficará surpreso com a facilidade de instalação do sistema. Configure rapidamente todos os seus roteamentos de chamadas em um editor visual."
          />
          <PresentationProduction
            my={{ base: '14', md: '0' }}
            urlImage={Group05}
            title="Fale de onde estiver"
            description="Alterne facilmente entre seu telefone desktop, aplicativo de desktop ou nosso aplicativo móvel para permanecer conectado."
          />
          <PresentationProduction
            urlImage={Group06}
            title="Chamadas de vídeo em HD"
            description="Confie na videoconferência em HD disponível em todas as licenças. Além disso, consolide a lista de ferramentas de comunicação que você usa com um aplicativo simples."
          />
        </Grid>



        <Flex flexDirection='column' alignItems='center'>
          <H3 mb='20px'>Solicite um orçamento com a Sim Company</H3>
          <ButtonChakra px='60px' py='24px'>Fazer um orçamento</ButtonChakra>
        </Flex>


        <DoubleGrid
          my={{ base: '50px', md: '85px' }}
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          textAlign='end'
          urlImage={BranchCall}
        >
          <Topics
            title="Desvio de chamadas e planos
            de discagem personalizáveis"
            description='Crie seu próprio encaminhamento de chamadas e conte com PBX completo com editor de plano de discagem de arrastar e soltar. Com nosso sistema de telefonia virtual, é fácil fazer alterações onde quer que você esteja.'
          />
        </DoubleGrid>

        <Track
          title='Sua solução all-in-one para
          salas de reunião'
        >
        </Track>


        <DoubleGrid
          my={{ base: '50px', md: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          urlImage={Dashboard}
        >
          <Topics
            title='Sistema de telefonia virtual
            que atende às suas
            necessidades'
            description='Adicione números gratuitos ou transfira seus números atuais. Implemente um diretório de árvore telefônica em toda a empresa. Crie um atendedor virtual para encaminhamento de chamadas. O fluxo de chamadas certo move o negócio na direção certa.'
          />
        </DoubleGrid>


        <DoubleGrid
          mb={{ base: '50px', md: '85px' }}
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={Can}
          textAlign='end'
        >
          <Topics
            title="Aumentar a satisfação
            dos seus clientes"
            description='Aumente a satisfação dos clientes e ajude a alavancar a produtividade dos representantes otimizando o fluxo de trabalho da central de atendimento com interações mais rápidas e fluidas.'
          />
        </DoubleGrid>


        <Track 
          title='Soluções de trabalho flexível compatíveis com
          qualquer aplicativo, em qualquer lugar'
          description="
          Participe de reuniões, chamadas pelo telefone, computador ou smartphone usando o aplicativo ou diretamente pelo navegador da Web.
          "
        />


        <Grid my={{ base: '50px', md: '85px' }} mx='10%' w='80%' gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} gridTemplateRows='1fr' gridColumnGap='10%'>
          <GridItem justifyContent={{ base: 'space-around' }} display='flex' flexDirection='column' h='400px' textAlign={{ base: 'center', lg: 'start' }}>

            <H3 mt='20px'>Mensal Flexível</H3>
            <Text>Novo: O preço mensal flexível do GoTo Room permite que os clientes financiem uma solução de sala de vídeo por uma taxa mensal baixa que cabe em qualquer orçamento. Escolha seu kit e seu modelo de financiamento preferido de 1, 2 ou 3 anos, e comece hoje mesmo.</Text>

            <Text>*Inclui uma licença do GoTo Room, equipamento
              para a sala e uma garantia de hardware de longo prazo.</Text>
            <ButtonChakra py='6' mt='16'>Solicitar orçamento</ButtonChakra>
          </GridItem>

          <GridItem justifyContent={{ base: 'space-around' }} display='flex' flexDirection='column' h='400px' textAlign={{ base: 'center', lg: 'start' }}>
            <H3>Compra padrão</H3>
            <Text>Adquira uma das nossas mais de 10 ofertas do GoTo Room e tenha tudo pronto para suas reuniões em questão de minutos. Os melhores preços do setor e as opções de várias salas ajudam nossos clientes a economizar muito.</Text>

            <Text> Solicite um orçamento personalizado hoje mesmo!</Text>
            <ButtonChakra py='6' mt='16'>Solicitar orçamento</ButtonChakra>
          </GridItem>
        </Grid>

      </main>
    </>
  )
}