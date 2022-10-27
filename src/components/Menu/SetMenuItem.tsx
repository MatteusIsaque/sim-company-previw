import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Fade, Flex, HStack, Icon, Link, Stack, StackProps, VStack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

import { IoMdArrowDropright } from 'react-icons/io'

interface SetMenuItemProps extends StackProps {
  mb?: string
}

export default function SetMenuItem({ mb, ...rest }: SetMenuItemProps) {

  // function RotateArrow(){
  //   const 
  // }

  return (
    <Stack w='100%' {...rest}>
      <MenuItem link='/' >
        Inicio
      </MenuItem>
      <MenuItem link='/produtos/central-de-atendimento'>
        Central de Atendimento
      </MenuItem>
      <MenuItem link='/produtos/plataforma-para-eventos'>
        Plataforma para eventos
      </MenuItem>
      <MenuItem link='/produtos/hardware-para-conferencias'>
        Hardware para conferências
      </MenuItem>
      <MenuItem link='/produtos/plataforma-de-videoconferencia'>
        Plataforma de videoconferência
      </MenuItem>
      <MenuItem link='/produtos/pabx'>
        Central de PABX em nuvem
      </MenuItem>
      {/* <Box position='relative'>
        <Accordion allowToggle >
          <AccordionItem border='none'>
            <AccordionButton p='0px' _expanded={{
              bgColor: '#1c2234',
              p: '2'
            }}>
              <Box textAlign='left'>
                Produtos
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel bgColor='#1c2234'>
              <Stack direction='column' textAlign='start' justifyContent='space-around' h='160px'>
                <Link fontSize='16px' href='/produtos/central-de-atendimento'>
                  Central de atendimento
                </Link>
                <Link fontSize='16px' href='/produtos/hardware-para-conferencias'>
                  Hardware para conferências
                </Link>
                <Link fontSize='16px' href='/produtos/pabx'>
                  PABX
                </Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box > */}
      <MenuItem link='/contato'>
        Contato
      </MenuItem>

    </Stack >
  )
}