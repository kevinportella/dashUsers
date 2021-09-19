import { InfoOutlineIcon, SpinnerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, HStack, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IUserResult, useHookContext } from '~/contexts/ContextAPI';
import { ModalUsers } from '../Modal';
import { format } from 'date-fns';
import { useRouter } from 'next/router';


export function Dashboard() {
  const [ currentUser, setCurrentUser ] = useState<IUserResult | null>(null)
  const [isInfoUserModalOpen, setIsInfoUserModalOpen] = useState(false)

  const router = useRouter()

  function handleCloseInfoUserModal () {
    setIsInfoUserModalOpen(false);
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { userList, currentPage, updatePage } = useHookContext();

  useEffect (() => {
    if (router.query.userUuid) {
      fetch(`https://randomuser.me/api/?results=1&uuid=${router.query.userUuid}`)
      .then(response => response.json())
      .then((userData) =>  {
        setCurrentUser(userData.results[0])
        setIsInfoUserModalOpen(true)
      })


    }
  }, [router.query])

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

          {userList.map(user => (
            <Tr key={user.login.uuid}>
              <Td>
                <Box>
                  <Text fontWeight="bold">{user.name.first} {user.name.last}</Text>
                  <Text
                    fontSize="sm"
                    color="gray.500"
                  >
                    {user.email}
                  </Text>
                </Box>
              </Td>
              {isWideVersion && <Td>{user.gender}</Td>}
              {isWideVersion && <Td>{format(new Date(user.registered.date), "dd/MM/yyyy")}</Td>}
              <Td>
                <Button
                  size="sm"
                  fontSize="sm"
                  bg="green.400"
                  onClick={() => {
                    setCurrentUser(user);
                    setIsInfoUserModalOpen(true);
                  }}
                >
                  <HStack spacing="1">
                    <InfoOutlineIcon />
                    {isWideVersion && <Text>Info</Text>}
                  </HStack>
                </Button>
              </Td>
            </Tr>
          ))}

        </Tbody>
      </Table>

      <Flex
        justify="center"
        pt="8"
      >
        <Button
          size="md"
          fontSize="md"
          bg="green.400"
          onClick={() => {
            updatePage(currentPage + 1)
          }}
        >
          <HStack spacing="1">
            <SpinnerIcon />
            {isWideVersion && <Text>Load more...</Text>}
          </HStack>
        </Button>

      </Flex>

      <ModalUsers
            isOpen={isInfoUserModalOpen}
            onClose={handleCloseInfoUserModal}
            userData={currentUser}
          />

    </Box>
  );
}
