import { Box, Flex, Grid, GridItem, Highlight, Text } from "@chakra-ui/react";
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
import H4 from "../../components/Texts/H4";
import H5 from "../../components/Texts/H5";


import webinar from './../../img/plataforma-para-eventos/webinar-site.jpg'
import webinarGraphic from './../../img/plataforma-para-eventos/grafico-webinar.jpg'
import DashboardWebinar from './../../img/plataforma-para-eventos/dashboard-webinar.jpg'
import ModelWebinar from './../../img/plataforma-para-eventos/modelo-webinar.jpg'

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
          backgroundImage={{ base: 'https://i.imgur.com/ZBBeSDh.jpg', md: 'https://i.imgur.com/L74Q6jP.jpg' }}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' mb='20px' fontSize={{ base: '3xl', xl: '4xl' }} color='White' fontWeight='extrabold' >
              Plataforma de webinar<br />
              livre de complicações
            </H1>
            <Text color='white'>Organize treinamentos e eventos híbridos para empresa, de
              demonstrações de produto pré-gravadas a conferências de vários dias</Text>
            <ButtonChakra mt='6' p={{ base: '6', xl: '8' }}>Falar com departamento</ButtonChakra>
          </GridItem>
          <GridItem>

          </GridItem>
        </Grid>


        <Track bgColor='Green.300'
          title='Plataforma de eventos virtuais completa'
          description='Com modos personalizados, recursos interativos, análises detalhadas, integrações profundas e preços flexíveis,
          nossa plataforma de webinar intuitiva tem tudo o que você precisa para hospedar eventos virtuais do tamanho que você deseja.'
        />



        <Grid my={{ base: '50px', xl: '85px' }} gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr 1fr' }} gridTemplateRows='1fr' gridColumnGap='2.5%' gridRowGap={{ base: '25px' }} width='75%' mx='12.5%'>
          <PresentationProduction
            title="Escala"
            description="Até 3.000 pessoas podem participar no Webcast pelo navegador, sem precisar baixar nada."
          />
          <PresentationProduction
            title="Simplicidade"
            description="A instalação leva poucos minutos, e é fácil gerenciar os webinars. Não precisa de suporte de TI."
          />
          <PresentationProduction
            title="Segurança"
            description="Proteja os dados de todos e dê estabilidade aos eventos com segurança de nível corporativo."
          />
          <PresentationProduction
            title="Fluidez"
            description="Monitore leads integrando seu CRM. Faça reuniões no MS e integre com seus aplicativos favoritos."
          />
        </Grid>



        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={webinarGraphic}
          paragraphPosition={{ base: 'center', lg: 'end' }}
        >
          <Topics
            title="Conjunto de ferramentas"
            description='Dê aos seus participantes o melhor que puder com vídeo e áudio HD de alta qualidade e recursos avançados que adicionam impacto aos seus eventos sem sacrificar a conveniência.

            Organize webinars gravados no GoToStage e atraia milhões de novas visualizações.
            
            Crie formulários de inscrição ou questionários personalizados para obter os dados dos inscritos.
            
            Aceite pagamentos com segurança e simplicidade com o Stripe.
            
            Personalize os formulários de inscrição com as perguntas e enquetes que você quiser.
            
            Pré-grave webinars para aperfeiçoar seu conteúdo antes de divulgá-lo.'
          />
        </DoubleGrid>

        <DoubleGrid
          my={{ base: '0px', md: '50px', xl: '0px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          paragraphPosition={{ base: 'center', lg: 'start' }}
          urlImage={ModelWebinar}
        >
          <Topics
            title='Expresse de maneira criativa'
            description='Com participação ativa na sessão, certificado de conclusão e muito mais, eventos envolventes incentivam a participação e o aprendizado do público enquanto você atrai novos clientes.

            Compartilhe sua câmera, crie enquetes interativas e desenhe na tela.
            
            Os webinars com vários apresentadores dão a chance de participar a até seis organizadores.
            
            Monitore a participação do público com o Painel de engajamento.
            
            Os participantes podem levantar a mão virtualmente para chamar sua atenção de um jeito simples.
            
            Anexe documentos antecipadamente ou distribua durante o webinar.'
          />
        </DoubleGrid>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          paragraphPosition={{ base: 'center', lg: 'end' }}
          urlImage={DashboardWebinar}
        >
          <Topics
            mb='2'
            paragraphPosition='end'
            textAlign='end'
            title="Aproveite 100% de seus
            eventos"
            description='Analise e aperfeiçoe seus eventos virtuais com análise detalhada para oferecer webinars melhores e otimizar sua estratégia de eventos.

            Leia relatórios abrangentes sobre os participantes para descobrir seus melhores clientes.
            
            Descubra melhores formas de engajar com relatórios analíticos, disponíveis para download.
            
            Descubra qual canal gerou mais cadastros com o monitoramento de origem.
            
            Monitore o engajamento, o desempenho e a fidelidade para melhorar sua estratégia.
            
            Automatize convites, lembretes e contato pós-evento para manter o engajamento.'
          />
        </DoubleGrid>

        <Track mb='50px'
          title='Organize seus melhores eventos'
        />
      </main>
    </>
  )
}