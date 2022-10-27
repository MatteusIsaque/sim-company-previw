import { Box, GridItem, GridItemProps, Text } from "@chakra-ui/react";
import Image from "next/image";
import H2 from "../Texts/H2";
import H3 from "../Texts/H3";
import H5 from "../Texts/H5";

interface PresentationProductionProps extends GridItemProps {
  urlImage?: any
  title: string
  description: string
}

export default function PresentationProduction({ urlImage, title, description, ...rest }: PresentationProductionProps) {

  return (
    <GridItem alignContent='center' textAlign='center' {...rest}>
      {
        urlImage && <Box>
          <Image src={urlImage} />
        </Box>
      }
      <H5 pt='4' fontSize='2xl' color='Blue.800'>
        {title}
      </H5>
      <Text >
        {description}
      </Text>
    </GridItem>
  )
}