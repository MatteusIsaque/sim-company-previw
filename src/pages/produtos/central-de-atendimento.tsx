import { Flex, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Head from "next/head";
import ButtonChakra from "../../components/Button/Button";
import Topics from "../../components/Information/Topics";
import DoubleGrid from "../../components/ProdutosPage/DoubleGrid";
import PresentationProduction from "../../components/ProdutosPage/PresentationProduction";
import Track from "../../components/ProdutosPage/track";
import H1 from "../../components/Texts/H1";
import H3 from "../../components/Texts/H3";
import H5 from "../../components/Texts/H5";

import FlexInCloud from './../../img/atendimento/flexibilidade-em-nuvem.jpg'
import Data from './../../img/atendimento/rum02.jpg'
import Center from './../../img/atendimento/rum03.jpg'

import dashboard from './../../img/atendimento/dashboard.jpg'
import CalPlay from './../../img/atendimento/Ti-sem-complicação.jpg'
import KitGoToRom from './../../img/atendimento/rápida-instalação.jpg'



export default function Comunicação() {

  return (
    <>
      <Head>
        <title>Produtos - Atendimento | Sim Company</title>
      </Head>

      <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Grid
          height='80vh'
          alignItems='center'
          px='10%'
          w='100%'
          bgImage="url('https://i.imgur.com/CV0egNJ.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr'
          gridColumnGap='10%'>
          <GridItem>
            <H1 lineHeight='40px' fontSize='3xl' color='white' fontWeight='extrabold'>
              Central de atendimento <br />
              em nuvem
            </H1>
            <Text color='white'>Ofereça melhores experiências ao cliente e aumente a receita com uma
              solução de call center em nuvem para pequenas e médias empresas.</Text>
            <ButtonChakra mt='6' px='8' py='6'>SOLICITAR DEMONSTRAÇÃO</ButtonChakra>
          </GridItem>
          <GridItem>

          </GridItem>
        </Grid>


        <Track bgColor='Green.300'
          title='Central de atendimento que trabalha em sincronia com você'
        />



        <Grid my={{ base: '50px', md: '85px' }} gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gridTemplateRows='1fr' gridColumnGap='7.5%' width='75%' mx='12.5%'>
          <PresentationProduction
            urlImage={FlexInCloud}
            title="Flexibilidade baseada na nuvem"
            description="Ajude as equipes a permanecerem produtivas em casa, no escritório ou onde quer que escolham trabalhar."
          />
          <PresentationProduction
            my={{ base: '14', md: '0' }}
            urlImage={KitGoToRom}
            title="Rápida instalação"
            description="Tenha tudo funcionando em um só dia com um processo de integração descomplicado."
          />
          <PresentationProduction
            urlImage={CalPlay}
            title="TI sem complicações"
            description="Configure e gerencie facilmente sua solução de call center por meio de um portal de gerenciamento simplificado."
          />
        </Grid>


        <Flex flexDirection='column' alignItems='center'>
          <H3 textAlign={{ base: 'center' }}>Solicite um orçamento com a Sim Company</H3>
          <ButtonChakra px='40px' py='18px' mt='2'>Fazer um orçamento</ButtonChakra>
        </Flex>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={dashboard}
          paragraphPosition={{ base: 'center', md: 'end' }}
        >
          <Topics
            title="Melhore a experiência de seus clientes"
            description='Crie o fluxo de trabalho para oferecer experiências de alto nível e obter os resultados que seus clientes merecem. Encaminhe as chamadas dos clientes para os agentes certos e ofereça filas de retorno de chamada. Acelere a discagem ou acione mensagens de voz pré-gravadas. Alterne facilmente entre voz, vídeo, SMS* e bate-papo.'
          />
        </DoubleGrid>


        <DoubleGrid
          my={{ base: '0px', md: '50px', xl: '85px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          paragraphPosition={{ base: 'center', md: 'start' }}
          urlImage={Data}
        >
          <Topics
            mt='6'
            title='Melhore o desempenho com dados sob demanda'
            description='Receba informações sobre a avaliação de seus clientes e use essa métrica para otimizar seus atendimentos. Veja estatísticas e análises de chamadas, como tempos totais de conversa e de espera. Personalize painéis por agente ou equipe. Identifique tendências e padrões de desempenho que podem ser aplicados a melhorias.
            '
          />
        </DoubleGrid>


        <DoubleGrid
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
          urlImage={Center}
          mb={{ base: '50px', md: '85px' }}
        >
          <Topics
            mb='2'
            paragraphPosition={{ base: 'center', md: 'end' }}
            textAlign={{ base: 'center', md: 'end' }}
            title="Mantenha uma central
            de atendimento sem
            preocupações"
            description='Configure fluxos de chamadas com o editor de planos de discagem de arrastar e soltar, atribua permissões de acesso e faça alterações em um único portal de administração simplificado.'
          />
        </DoubleGrid>


        <Track
          mt={{ base: '-50px', md: '100px' }}
          mb={{ base: '50px' }}
          title='Uma solução de central de
          atendimento para toda a equipe'
        />

        <Tabs variant={"enclosed"} isFitted w={{ base: '90%', md: '80%' }} mx={{ base: '5%', md: '10%' }} mb='100px'>
          <TabList display='flex' flexDirection={{ base: 'column', md: 'row' }}>
            <Tab color='Blue.500' fontWeight='bold'>
              Supervisores
            </Tab>
            <Tab color='Blue.500' fontWeight='bold'>
              Agentes
            </Tab>
            <Tab color='Blue.500' fontWeight='bold'>
              Administradores
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <H5 mb='4'>Atenda às expectativas e gere resultados</H5>

              <Text>Tome decisões de negócios fundamentadas com <Text as='b'>relatórios e análises em tempo real</Text></Text>

              <Text>Oriente os agentes e melhore as interações com os <Text as='b'>modos Ouvinte e Sussurro</Text>, além da <Text as='b'>gravação de chamadas</Text></Text>

              <Text>Reduza os tempos de espera com as <Text as='b'>filas de retorno de chamadas</Text></Text>

              <Text>Melhore a resolução de problemas em chamadas com o <Text as='b'>encaminhamento de chamadas inteligente</Text></Text>
            </TabPanel>

            <TabPanel>
              <H5 mb='4'>Economize tempo e trabalhe de forma mais inteligente</H5>

              <Text>Reduza o tempo ocioso e aumente o tempo ativo de atendimento com <Text as='b'>correios de voz pré-gravados</Text></Text>

              <Text>Melhore a produtividade e acelere as chamadas de vendas com o <Text as='b'>discador automático</Text></Text>

              <Text>Alterne tranquilamente entre <Text as='b'>voz, vídeo, bate-papo e SMS</Text>, de acordo com a preferência do cliente </Text>

              <Text>Confira o desempenho e os KPIs com <Text as='b'>painéis de agentes</Text> personalizáveis </Text>
            </TabPanel>

            <TabPanel>
              <H5 mb='4'>Construa o fluxo de trabalho perfeito</H5>

              <Text>Configure fluxos de chamadas facilmente com um <Text as='b'>editor visual de planos de discagem</Text> de arrastar e soltar </Text>

              <Text><Text as='b'>Integre seu CRM</Text> facilmente para obter informações e insights atualizados sobre o cliente </Text>

              <Text>Alivie a carga dos administradores de TI <Text as='b'>atribuindo permissões</Text> a outros membros da equipe</Text>

              <Text>Ajuste a <Text as='b'>configuração multicanal</Text> para voz, vídeo, bate-papo e SMS</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>




        <Track
          mt={{ base: '-25px', md: '0px', lg: '100px' }}
          mb={{ base: '25px', md: '25', lg: '50px' }}
          title='Encontre o plano ideal para sua empresa'
        />


        <Grid mx='10%' w='80%' gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} gridTemplateRows='1fr' gridColumnGap='10%'>
          <GridItem mb={{ base: '50', lg: '20' }} h='400px' justifyContent={{ base: 'center', lg: 'space-around' }} display='flex' flexDirection='column' textAlign='start'>
            <H3>Core</H3>
            <Text my='-8px'>A partir de...</Text>
            <H3>R$ 193.00</H3>
            <Text mt={{ base: '10px', md: '25px' }}>Os recursos essenciais: resposta de voz interativa, filas,
              bate-papo pela Web, integração com o Facebook e
              relatórios padrão.</Text>

            <Text mt='10' as='b'> /usuário por mês, cobrança anual</Text>
            <ButtonChakra py='6' mt='16'>Solicitar orçamento</ButtonChakra>
          </GridItem>

          <GridItem h='400px' justifyContent={{ base: 'center', lg: 'space-around' }} display='flex' flexDirection='column' textAlign='start'>
            <H3>Completo</H3>
            <Text my='-8px'>A partir de...</Text>
            <H3>R$ 308.00</H3>
            <Text mt={{ base: '10px', md: '25px' }}>Todos os recursos do Core, além de relatórios avançados e
              funcionalidades de gerenciamento.</Text>

            <Text mt='10' as='b'> /usuário/mês, cobrança anual</Text>
            <ButtonChakra py='6' mt='16'>Solicitar orçamento</ButtonChakra>
          </GridItem>
        </Grid>

      </main>
    </>
  )
}