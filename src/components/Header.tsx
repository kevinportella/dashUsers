import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, HStack, Input, Text, Box, Avatar, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";


export function Header() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1240}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
      fontSize="3xl"
      fontWeight="medium"
      letterSpacing="tight"
      w="64"
      >
        Pharma Inc
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg={useColorModeValue('gray.100', 'gray.900')}
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na Plataforma"
          _placeholder={{ color: 'gray.400' }}
        />
          <SearchIcon fontSize="20" color={useColorModeValue('gray.900', 'gray.400')} />

      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
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
            mr="2"
            size="sm"
            onClick={toggleColorMode}
            variant="outline"
            colorScheme="gray"
          >
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </HStack>

        <Flex
          align="center"
        >
          <Box mr="4" textAlign="right">
            <Text>Kevin Bohry</Text>
            <Text fontSize="sm">kevinportella@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Kevin Bohry"/>

        </Flex>

      </Flex>

    </Flex>
  )
}
