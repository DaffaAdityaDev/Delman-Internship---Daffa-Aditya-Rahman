import { Heading, Stack, Box, Avatar, HStack, Text, Spacer} from '@chakra-ui/react'

function BoxUserFetch({props}) {
  return (
    <>
      <Box
        boxShadow='2xl'
        w='270px'
        h='300px'
        borderRadius='md'
        border='1px'
        borderColor={props.gender == 'female' ? 'pink.100' : 'blue.100'}>
        <Stack align='center' padding='8'>
            <Avatar w="24" h="24" src={props.picture.large}/>
            <Stack spacing={5} pt={5}>
                <Stack align={'center'}>
                    <Heading fontSize='lg' fontFamily={'body'} fontWeight='500'>
                        {props.name.first} {props.name.first}
                    </Heading>
                    <Text color='gray'>{props.email}</Text>
                </Stack>
                <HStack justify={'center'} spacing='6'>
                    <Stack w='85px' align={'center'} spacing='1'>
                        <Text fontFamily={'body'} fontWeight='600'>{props.nat}</Text>
                        <Text color='gray' fontSize={'sm'}>Nationality</Text>
                    </Stack>
                    <Spacer />
                    <Stack w='85px' align={'center'} spacing='1'>
                        <Text fontFamily={'body'} fontWeight='600'>{props.dob.age}</Text>
                        <Text color='gray' fontSize={'sm'}>Age</Text>
                    </Stack>
                </HStack>
            </Stack>
        </Stack>
      </Box> 
    </>
  )
}

export default BoxUserFetch