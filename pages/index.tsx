import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "~/components/Header";
import { ModalUsers } from "~/components/Modal";
import { Users } from "~/components/Users";

export default function Home() {
  const [isInfoUserModalOpen, setIsInfoUserModalOpen] = useState(false)

  function handleOpenInfoUserModal () {
    setIsInfoUserModalOpen(true);
  }

  function handleCloseInfoUserModal () {
    setIsInfoUserModalOpen(false);
  }
  return (

      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1240} mx="auto" px="6">
          <Users onOpenInfoUserModal={handleOpenInfoUserModal}/>
          <ModalUsers
            isOpen={isInfoUserModalOpen}
            onClose={handleCloseInfoUserModal}
          />
        </Flex>
      </Flex>
  )
}
