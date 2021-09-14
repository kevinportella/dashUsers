import { Stack, Avatar, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ContextAPI } from "~/ContextAPI";

export function User() {

  const data = useContext(ContextAPI);

  console.log(data)
  return (
    <Stack align="center">
      <Avatar size="2xl" name="Kevin Bohry"/>

      <Heading>{}</Heading>

      <Text fontSize="sm">kevinportella@gmail.com</Text>

      <Text fontSize="sm">ID: 1234</Text>
    </Stack>
)
}
