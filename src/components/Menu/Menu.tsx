import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, IconButton, Link, Stack, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SideBarDrawerContext";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import MenuWindown from "./MenuWindown";
import SetMenuItem from "./SetMenuItem";





export default function Menu() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const isDrawer = useBreakpointValue({
    base: true,
    lg: false
  })

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

  const router = useRouter()


  useEffect(() => {
    onClose
  }, [router.asPath])

  if (isDrawer) {
    return (
      <>
        <Flex
          justifyContent='space-between'
          h='60px'
          alignSelf='center'
          maxW={{ '2xl': '1344px' }}
          bgColor='white'
          mx={{ base: '5%', lg: '10%', '2xl': '15%' }}>
          <Logo w='50px' />

          {isDrawer && (
            <IconButton
              icon={<Icon as={RiMenuLine} />}
              fontSize={24}
              variant='unstyled'
              aria-label="Menu"
              onClick={onOpen}
              mt='18px'
            >

            </IconButton>)}
        </Flex>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg='Blue.800' p='4'>
              <DrawerCloseButton mt='8' color='white' />


              <DrawerBody mt='6'>
                <Flex
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='space-between'
                  h='100%'
                >
                  <SetMenuItem
                    display='flex'
                    textAlign='center'
                    flexDirection='column'
                    color='white'
                    fontSize='18px'
                    direction='column'
                    spacing={4}
                  />

                  <Flex
                    alignItems='center'
                    flexDirection='column'>
                    <Logo
                      w='120px' />
                    <Text
                      mt='4'
                      fontSize='12px'
                      textAlign='center'
                      color='white'
                    >Soluções em telefonia</Text>
                  </Flex>

                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>

    )
  }

  return (
    <Flex
      justifyContent='space-between'
      h='60px'
      alignItems='center'
      maxW={{ '2xl': '1344px' }}
      mx={{ base: '5%', lg: '10%', '2xl': '15%' }}>
      <Flex alignSelf='center'>
        <Logo w='50px' />
      </Flex>


      <IconButton
        icon={<Icon as={RiMenuLine} />}
        fontSize={38}
        variant='unstyled'
        aria-label="Menu"
        onClick={onOpen}
      >

      </IconButton>

      <Drawer closeOnEsc={true} onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerContent>
          <DrawerCloseButton mr='5%' mt='50' size='100px' color='white' zIndex={200} />


          <DrawerBody>
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
                  <MenuItem link='/produtos/plataforma-para-eventos' fontSize='3xl' >
                    Plataforma para Eventos
                  </MenuItem>
                </Box>
                <Box>
                  <MenuItem link='/produtos/plataforma-de-videoconferencia' fontSize='3xl' >
                    Plataforma de videoconferência
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
          </DrawerBody>
        </DrawerContent>


      </Drawer>
    </Flex>
  )
}