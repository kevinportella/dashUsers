import {
  Avatar, Button, Flex, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue
} from "@chakra-ui/react";
import React from "react";

interface ModalUsersProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalUsers({ isOpen, onClose }:ModalUsersProps) {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
        <ModalContent
          p="8"
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow="2xl"
          rounded="lg"
          justify="center"
        >
          <ModalHeader >
            <Stack align="center">
              <Avatar size="2xl" name="Kevin Bohry"/>
              <Heading>Kevin Bohry</Heading>
              <Text fontSize="sm">kevinportella@gmail.com</Text>
              <Text fontSize="sm">ID: 1234</Text>
            </Stack>
          </ModalHeader>

          <ModalBody>
            <Stack p="1">
              <Text >Gender:</Text>
              <Flex
                color={useColorModeValue('gray.800', 'gray.100')}
                bg={useColorModeValue('gray.300', 'gray.800')}
                rounded="full"
                border="0"
                p="2"
              >
                <Text px="4">Male</Text>
              </Flex>
            </Stack>

            <Stack p="1">
              <Text >Birth:</Text>
              <Flex
                color={useColorModeValue('gray.800', 'gray.100')}
                bg={useColorModeValue('gray.300', 'gray.800')}
                rounded="full"
                border="0"
                p="2"
              >
                <Text px="4">03/10/1995</Text>
              </Flex>
            </Stack>

            <Stack p="1">
              <Text >Telephone:</Text>
              <Flex
                color={useColorModeValue('gray.800', 'gray.100')}
                bg={useColorModeValue('gray.300', 'gray.800')}
                rounded="full"
                border="0"
                p="2"
              >
                <Text px="4">19-98126-0060</Text>
              </Flex>
            </Stack>

            <Stack p="1">
              <Text>UF:</Text>
              <Flex
                color={useColorModeValue('gray.800', 'gray.100')}
                bg={useColorModeValue('gray.300', 'gray.800')}
                rounded="full"
                border="0"
                p="2"
              >
                <Text px="4">Brasil</Text>
              </Flex>
            </Stack>

            <Stack p="1">
              <Text>Address :</Text>
              <Flex
                color={useColorModeValue('gray.800', 'gray.100')}
                bg={useColorModeValue('gray.300', 'gray.800')}
                rounded="full"
                border="0"
                p="2"
              >
                <Text px="4">Engenheiro Coelho</Text>
              </Flex>
            </Stack>

          </ModalBody>

          <ModalFooter alignSelf="right">
            <Button bg="green.400" mr={3}>
              Share
            </Button>
            <Button bg="red.400" mr={3} onClick={onClose}>
              Close
            </Button>

          </ModalFooter>
        </ModalContent>

    </Modal>
  );
}
