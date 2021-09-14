import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">

        <Text>Kevin Bohry</Text>

        <Text fontSize="sm">kevinportella@gmail.com</Text>

      </Box>

      <Avatar size="md" name="Kevin Bohry"/>
    </Flex>
  )
}
