import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, HStack, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Pagination } from './Pagination/Index';

interface UserProps {
  onOpenInfoUserModal: () => void;
}

export function Users({ onOpenInfoUserModal } : UserProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box flex="1" borderRadius={8} bg={useColorModeValue('gray.100', 'gray.900')} p={["2","8"]}>
      <Flex mb="8" justify="center" align="center" >
        <Heading size="lg" fontWeight="normal">Users</Heading>
      </Flex>

      <Table colorScheme={useColorModeValue('gray.900', 'gray.400')}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            {isWideVersion && <Th>Gender</Th>}
            {isWideVersion && <Th>Birth</Th>}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Box>
                <Text fontWeight="bold">Kevin Bohry</Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                >
                  kevinportella@gmail.com
                </Text>
              </Box>
            </Td>
            {isWideVersion && <Td>Male</Td>}
            {isWideVersion && <Td>03/10/1995</Td>}
            <Td>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="purple"
                onClick={onOpenInfoUserModal}
              >
                <HStack spacing="1">
                  <InfoOutlineIcon />
                  {isWideVersion && <Text>Inf</Text>}
                </HStack>
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Pagination />
    </Box>
  );
}
