import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, HStack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Pagination } from "./Pagination";

interface UserProps {
  onOpenInfoUserModal: () => void;
}

export function Users({ onOpenInfoUserModal } : UserProps) {

  return (
    <Box flex="1" borderRadius={8} bg={useColorModeValue('gray.100', 'gray.900')} p="8">
      <Flex mb="8" justify="center" align="center" >
        <Heading size="md" fontWeight="normal">Users</Heading>
      </Flex>

      <Table colorScheme={useColorModeValue('gray.900', 'gray.400')}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Birth</Th>
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
            <Td>Male</Td>
            <Td>03/10/1995</Td>
            <Td>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="purple"
                onClick={onOpenInfoUserModal}
              >
                <HStack spacing="1">
                  <InfoOutlineIcon />
                  <Text>Inf</Text>
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
