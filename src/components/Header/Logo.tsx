import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="medium"
      letterSpacing="tight"
      w="64"
      >
        Pharma Inc
        <Text as="span" ml="1" color="pink.500">.</Text>
    </Text>
  )
}
