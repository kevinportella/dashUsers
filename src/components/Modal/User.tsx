import { Stack, Avatar, Heading, Text } from "@chakra-ui/react";

export function User() {
  return (
    <Stack align="center">
      <Avatar size="2xl" name="Kevin Bohry"/>

      <Heading>Kevin Bohry</Heading>

      <Text fontSize="sm">kevinportella@gmail.com</Text>

      <Text fontSize="sm">ID: 1234</Text>
    </Stack>
)
}
