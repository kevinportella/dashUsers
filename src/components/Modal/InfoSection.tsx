import { Stack, Text, Flex, useColorModeValue } from "@chakra-ui/react";

interface InfoSectionProps {
  title: string;
  inf: string;
}

export function InfoSection({ title, inf }: InfoSectionProps) {
  return (
    <Stack p="1">
      <Text >{title}:</Text>
      <Flex
        color={useColorModeValue('gray.800', 'gray.100')}
        bg={useColorModeValue('gray.300', 'gray.800')}
        rounded="full"
        border="0"
        p="2"
      >
        <Text px="4">{inf}</Text>
      </Flex>
    </Stack>
  )
}
