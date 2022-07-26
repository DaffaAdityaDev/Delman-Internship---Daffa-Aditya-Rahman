import React from 'react'
import Link from 'next/link'
import { Box, Text, Center, Divider, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack } from '@chakra-ui/react'
function Navbar({ url }) {
  return (

    <HStack p="1em" w="100%" position="absolute" h="55px" align="center">
        <Box>
            <Text as="p" fontSize="2xl" mt="-1">delman.io</Text>
        </Box>
        <Center height='20px'>
            <Divider orientation='vertical' ms="3" me="3" color="rgba(0,0,0,0.1)"/>
        </Center> 
        <Breadcrumb >
            <BreadcrumbItem>
                <Link href="/">
                    <BreadcrumbLink href='#'>Internship Program</BreadcrumbLink>
                </Link>
            </BreadcrumbItem>
            
            { url ? 
            <BreadcrumbItem >
                <BreadcrumbLink pointerEvents="none">{url}</BreadcrumbLink>
            </BreadcrumbItem>
            : null }
        </Breadcrumb>
    </HStack>
  )
}

export default Navbar