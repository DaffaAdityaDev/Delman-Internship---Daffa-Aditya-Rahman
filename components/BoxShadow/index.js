import React from 'react'
import { Stack, HStack, Text, Box, Button, Heading} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
function BoxShadow({ title, desc, url }) {
  return (
    <Box w="270px" h="150px" borderWidth="1px" boxShadow="md" p="5">
        <Button rightIcon={<ArrowForwardIcon />} minW="10" variant='link' bg="transparent">
            <Heading lineHeight="1.2" fontSize="xl" fontWeight="bold" fontFamily="heading">{title}</Heading>
        </Button>
        <Text as="p" overflow="hidden" mt="4">{desc}</Text>
    </Box>
  )
}

export default BoxShadow