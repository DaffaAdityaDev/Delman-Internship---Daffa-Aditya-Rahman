import Head from 'next/head'
import { Box, HStack, VStack, Flex, Heading, Divider} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import BoxShadow from '../components/BoxShadow'
export default function Home() {
  return (
    <Box>
      <Head>
        <title>Internship Program</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Flex flexDirection="column" minH="100vh" align="center" justify="center">
        <VStack>
          <Box>
            <Heading textAlign="center">Internship Program</Heading>
            <Divider mt="8" color="rgba(0,0,0,0.1)"/>
            <HStack mt="8">
              <BoxShadow title="Title Transformer" desc="A Simple title transformation panel" url="/title_transformer"/>
              <BoxShadow title="User Fetcher" desc="A simple API fetching and rendering process" url="/fetching"/>
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  )
}
