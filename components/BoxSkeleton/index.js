import React from 'react'
import { SkeletonText, Stack, Box, Avatar, HStack, Text, Spacer} from '@chakra-ui/react'
function BoxSkeleton() {
  return (
    <Box
      boxShadow='2xl'
      w='270px'
      h='300px'
      borderRadius='sm'
      padding='8'
      marginTop="8"
      borderWidth='0px'>
      <Stack spacing='5' align='center'>
          <Avatar w="24" h="24" />
          <SkeletonText w='100%' noOfLines={8} color="grey" />
      </Stack>
    </Box>
  )
}

export default BoxSkeleton