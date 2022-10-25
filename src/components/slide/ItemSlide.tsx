import { Box, BoxProps, Grid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import H5 from "../Texts/H5";

interface ItemSlideProps extends BoxProps {
  children: ReactNode
}

export default function ItemSlide({ children, ...rest }: ItemSlideProps) {

  return (
    <Grid
      px={{ base: '2%', sm: '10%' }}
      height='80vh'
      {...rest}>
      <Box display='flex' justifyContent='center' alignItems='start' flexDirection='column' color='white'>
        {children}
      </Box>
    </Grid>
  )
}