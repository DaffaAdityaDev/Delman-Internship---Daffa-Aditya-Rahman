import React from 'react'
import Link from 'next/link'
import { Stack, HStack, Text, Box, Button, Heading} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
function BoxShadow({ title, desc, url }) {
  return (
    <Box w="270px" h="150px" borderWidth="1px" boxShadow="md" p="5">
      <Link href={url}>
        <Button rightIcon={<ArrowForwardIcon />} minW="10" variant='link' bg="transparent" color="#000">
           <Heading lineHeight="1.2" fontSize="xl" fontWeight="bold" fontFamily="heading">{title}</Heading>
        </Button>
      </Link>
      <Text as="p" overflow="hidden" mt="4">{desc}</Text>
    </Box>
  )
}

export default BoxShadow