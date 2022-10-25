import { Flex, FlexProps, Text } from "@chakra-ui/react";
import H2 from "../Texts/H2";
import H3 from "../Texts/H3";


interface TrackProps extends FlexProps {
  title?: string
  description?: string
}

export default function Track({ title, description, ...rest }: TrackProps) {

  return (
    <Flex {...rest} flexDirection='column' alignItems='center' py='8'>
      <H3 color='Blue.800' px={{base:'5%', md:'20%'}} textAlign='center' fontWeight={{ base: 'extrabold', md: 'bold' }}>
        {title}
      </H3>
      <Text px='10%' textAlign='center' as='p' color='Blue.800' mt='2'>{description}</Text>
    </Flex>
  )
}