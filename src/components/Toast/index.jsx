import { useToast } from '@chakra-ui/react'

export function Toast() {
  const toast = useToast()
  return toast({
    title: 'An error occurred.',
    description: 'Unable to create user account.',
    status: 'error',
    duration: 9000,
    isClosable: true,
  })
}
