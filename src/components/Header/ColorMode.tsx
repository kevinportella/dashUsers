import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, useColorModeValue, Button, useColorMode } from "@chakra-ui/react";

export function ColorMode() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      spacing="8"
      mx="8"
      pr="8"
      py="1"
      color={useColorModeValue('gray.900', 'gray.400')}
      borderRightWidth={1}
      borderColor={useColorModeValue('gray.900', 'gray.400')}
    >
      <Button
        mr="1"
        size="sm"
        onClick={toggleColorMode}
        variant="outline"
        colorScheme="gray"
      >
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
  </HStack>
  )
}
