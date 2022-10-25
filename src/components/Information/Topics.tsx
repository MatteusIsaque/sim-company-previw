import { Box, Text, TextProps } from "@chakra-ui/react"
import H5 from "../Texts/H5"

interface InfromationType extends TextProps {
  title?: string,
  description: string
  paragraphPosition?: any
}


export default function Topics({ title, description, paragraphPosition, ...rest }: InfromationType) {

  return (
    <Box my='2'>
      <H5 mt='1' {...rest}>{title}</H5>
      <Text textAlign={paragraphPosition}>{description}</Text>
    </Box>
  )
}