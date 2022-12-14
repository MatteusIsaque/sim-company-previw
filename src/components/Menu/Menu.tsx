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
    testandoId.style.backgroundImage = "url('https://i.imgur.com/sKkwdfb.jpg')"
  }

  function HoverEvents() {
    const testandoId: any = document.getElementById('bgHeader')
    testandoId.style.backgroundImage = "url('https://i.imgur.com/Bt8VfVh.jpg')"
  }

  function HoverConferency() {
    const testandoId: any = document.getElementById('bgHeader')
    testandoId.style.backgroundImage = "url('https://i.imgur.com/ofselle.jpg')"
  }

  function HoverContact() {
    const testandoId: any = document.getElementById('bgHeader')
    testandoId.style.backgroundImage = "url('https://i.imgur.com/S8wHaXl.jpg')"
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
          // maxW={{ '2xl': '1344px' }}
          bgColor='white'
          mx={{ base: '5%', xl: '10%' }}>
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
                    alignItems='start'
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
                      w='60px' />
                    <Text
                      mt='4'
                      fontSize='12px'
                      textAlign='center'
                      color='white'
                    >Solu????es em telefonia</Text>
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
      mx={{ base: '5%', sm: '10%' }}>
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
                  <MenuItem link='/' fontSize='26px' onMouseEnter={HoverHome} onClick={onClose}>
                    Inicio
                  </MenuItem>
                </Box>
                <Box>
                  <MenuItem link='/produtos/central-de-atendimento' fontSize='26px' onMouseEnter={HoverCallCenter} onClick={onClose}>
                    Central de Atendimento
                  </MenuItem>
                </Box>
                <Box>
                  <MenuItem link='/produtos/hardware-para-conferencias' fontSize='26px' onMouseEnter={HoverHardware} onClick={onClose}>
                    Hardware para Confer??ncias
                  </MenuItem>
                </Box>
                <Box>
                  <MenuItem link='/produtos/plataforma-para-eventos' fontSize='26px' onMouseEnter={HoverEvents} onClick={onClose}>
                    Plataforma para Eventos
                  </MenuItem>
                </Box>
                <Box>
                  <MenuItem link='/produtos/plataforma-de-videoconferencia' fontSize='26px' onMouseEnter={HoverConferency} onClick={onClose}>
                    Plataforma de Videoconfer??ncia
                  </MenuItem>
                </Box>
                <Box>
                  <MenuItem link='/produtos/pabx' fontSize='26px' onMouseEnter={HoverPABX} onClick={onClose}>
                    Central PABX em Nuvem
                  </MenuItem>
                </Box>
                <Box>
                  <MenuItem link='/contato' fontSize='26px' onMouseEnter={HoverContact} onClick={onClose}>
                    Contato
                  </MenuItem>
                </Box>
              </Stack>
            </Flex>
          </DrawerBody>
        </DrawerContent>


      </Drawer>
    </Flex>
  )
}