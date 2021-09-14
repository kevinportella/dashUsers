import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { InfoSection } from "./InfoSection";
import { User } from "./User";

interface ModalUsersProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalUsers({ isOpen, onClose }: ModalUsersProps) {

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

            <User />

          </ModalHeader>

          <ModalBody>

            <InfoSection title="Gender" inf="Male" />

            <InfoSection title="Birth" inf="03/10/1995" />

            <InfoSection title="Telephone" inf="(19) 98126-0060" />

            <InfoSection title="Country" inf="Brasil" />

            <InfoSection title="Location" inf="Eng. Coelho" />

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
