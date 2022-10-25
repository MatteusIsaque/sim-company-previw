import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Fade, Flex, HStack, Icon, Link, Stack, StackProps, VStack } from "@chakra-ui/react";
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
    <Stack {...rest}>
      <MenuItem link='/' >
        Inicio
      </MenuItem>
      <MenuItem link='/servicos'>
        Serviços
      </MenuItem>
      <Box position='relative'>
        <Accordion border='white' allowToggle >
          <AccordionItem>
            <AccordionButton>
              <Box flex='1' mr='2' textAlign='left'>
                Produtos
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel position='absolute' bgColor='whiteAlpha.900' bottom='-117px'>
              <Stack direction='column' textAlign='center' justifyContent='space-around' h='80px'>
                <Link href='/produtos/central-de-atendimento'>
                  Central de atendimento
                </Link>
                <Link href='/produtos/hardware-para-conferencias'>
                  Hardware para conferências
                </Link>
                <Link href='/produtos/pabx'>
                  PABX
                </Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <MenuItem link='/contato'>
        Contato
      </MenuItem>

    </Stack>
  )
}