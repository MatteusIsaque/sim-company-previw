import { Button as ButtonaChakra, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonChakraProps extends ButtonProps {
  children: ReactNode
}


export default function ButtonChakra({ children, ...rest }: ButtonChakraProps) {

  return (
    <ButtonaChakra _hover={{
      'bgColor': 'Blue.800'
    }} colorScheme='Red' color='white' fontWeight='normal' fontSize={{ base: '14px', sm: '16px', md: '18px', xl: '20px' }} borderRadius='14' {...rest}>
      {children}
    </ButtonaChakra>
  )
}