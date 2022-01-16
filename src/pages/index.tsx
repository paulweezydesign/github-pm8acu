



import { Box, Button, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'


export const Index = () => (
  <Box as="section">
    <Box
      maxW="2xl"
      mx="auto"
      px={{ base: '6', lg: '8' }}
      py={{ base: '16', sm: '20' }}
      textAlign="center"
    >
      <Heading size="4xl" fontWeight="extrabold" letterSpacing="tight">
        Come adopt my cute ass kittens
      </Heading>
      <Text mt="4" fontSize="xx-large">
      They deserve a good home!
      </Text>
      <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
        Start Free Trial
      </Button>
    </Box>

  </Box>
  
)
export default Index
