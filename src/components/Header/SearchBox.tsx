import { SearchIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue, Input } from "@chakra-ui/react";
import { useHookContext } from "~/contexts/ContextAPI";

export function SearchBox() {
  return (
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
      // onSubmit={handleSearch}
    >
      <Input
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na Plataforma"
        _placeholder={{ color: 'gray.400' }}
        // value={search}
        // onChange={e => setSearch(e.target.value)}
      />
        <SearchIcon fontSize="20" color={useColorModeValue('gray.900', 'gray.400')} />

    </Flex>
  )
}
