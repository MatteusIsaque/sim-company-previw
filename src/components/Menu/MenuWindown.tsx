import { Box, Fade, Flex, Stack, Text, useDisclosure } from "@chakra-ui/react";
import MenuItem from "./MenuItem";




export default function MenuWindown(CloseMenu: any) {
  
  const { isOpen, onClose, onToggle } = useDisclosure()

  function HoverHome() {
    const testandoId: any = document.getElementById('bgHeader')
    testandoId.style.backgroundImage = "url('https://i.imgur.com/qUq4MvM.jpg')"
  }

  function HoverCallCenter() {
    const testandoId: any = document.getElementById('bgHeader')
    testandoId.style.backgroundImage = "url('https://i.imgur.com/C5rYATf.jpg')"
  }

  function HoverPABX() {
    const testandoId: any = document.getElementById('bgHeader')
    testandoId.style.backgroundImage = "url('https://i.imgur.com/qUq4MvM.jpg')"
  }

  function HoverHardware() {
    const testandoId: any = document.getElementById('bgHeader')
    testandoId.style.backgroundImage = "url('https://i.imgur.com/ofselle.jpg')"
  }

  return (
    <Flex
      alignItems='center'
      justifyContent='start'
      px='10%'
      minH='101vh'
      w='100%'
      id='bgHeader'
      bgColor='white'
      bgImage="url('https://i.imgur.com/JYbeO7d.jpg')"
      transition='1s'
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position='fixed' top='0' zIndex={100}>
      <Stack spacing={4} justifyContent='center' flexDirection='column'>
        <Box>
          <MenuItem link='/' fontSize='3xl' onMouseEnter={HoverHome}>
            Inicio
          </MenuItem>
        </Box>
        <Box>
          <MenuItem link='/produtos/central-de-atendimento' fontSize='3xl' onMouseEnter={HoverCallCenter} onClick={onClose}>
            Central de Atendimento
          </MenuItem>
        </Box>
        <Box>
          <MenuItem link='/produtos/hardware-para-conferencias' fontSize='3xl' onMouseEnter={HoverHardware} onClick={onClose}>
            Hardware para Conferências
          </MenuItem>
        </Box>
        <Box>
          <MenuItem link='/produtos/pabx' fontSize='3xl' onMouseEnter={HoverPABX} onClick={onClose}>
            PABX
          </MenuItem>
        </Box>
        <Box>
          <MenuItem link='/' fontSize='3xl' onClick={onToggle}>
            Produtos
          </MenuItem>
        </Box>
        <Box>
          <MenuItem link='/' fontSize='3xl'>
            Contato
          </MenuItem>
        </Box>
      </Stack>

      {/* <Fade in={isOpen}>
        <Flex ml='20%' w='100%' flex='1'>
          <Box h='60vh' bgColor='Green.500' bgGradient={[
            'linear(to-b, Green.500, Green.300)',
          ]} w='2px' borderRadius='10' />
          <Stack spacing={4} justifyContent='center' flexDirection='column' pl='60px'>
            <Box>
              <Text fontSize='2xl'>
                PABX
              </Text>
            </Box>
            <Box>
              <Text fontSize='2xl'>
                Hardware para conferência
              </Text>
            </Box>
            <Box>
              <Text fontSize='2xl'>
                Centra de atendimento
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Fade> */}

    </Flex>
  )
}