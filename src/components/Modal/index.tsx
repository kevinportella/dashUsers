import { Avatar, Button, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useClipboard } from "@chakra-ui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { IUserResult } from "~/contexts/ContextAPI";
import { InfoSection } from "./InfoSection";

interface ModalUsersProps {
  isOpen: boolean;
  onClose: () => void;
  userData: IUserResult | null;
}

export function ModalUsers({ isOpen, onClose, userData }: ModalUsersProps) {
  const [urlCopy, setUrlCopy] = useState('')
  const { onCopy, hasCopied } = useClipboard(urlCopy)

  useEffect(() => {
    setUrlCopy(`${window.location.origin}/?userUuid=${userData?.login.uuid}`)
  }, [userData])

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
              <Avatar src={userData?.picture.large} size="2xl" name={userData?.name.first}/>

              <Heading>{userData?.name.first} {userData?.name.last}</Heading>

              <Text fontSize="sm">{userData?.email}</Text>

              <Text fontSize="sm">{userData?.login.uuid}</Text>
            </Stack>

          </ModalHeader>

          <ModalBody>

            <InfoSection title="Gender" inf={userData?.gender} />

            <InfoSection title="Birth" inf={format(new Date(userData?.registered.date || 0), "dd/MM/yyyy")} />

            <InfoSection title="Telephone" inf={userData?.phone} />

            <InfoSection title="Country" inf={userData?.location.country} />

            <InfoSection title="Location" inf={userData?.location.street.name} />

          </ModalBody>

          <ModalFooter alignSelf="right">

            <Button bg="green.400" mr={3} onClick={onCopy}>
              {hasCopied ? "Copied" : "Copy URL"}
            </Button>

            <Button bg="red.400" mr={3} onClick={onClose}>
              Close
            </Button>

          </ModalFooter>
        </ModalContent>

    </Modal>
  );
}
