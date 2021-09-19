import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "~/components/Header";
import { ModalUsers } from "~/components/Modal";
import { Dashboard } from "~/components/Dashboard";

export default function Home() {

  return (

      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1240} mx="auto" px="6">

          <Dashboard/>

        </Flex>
      </Flex>
  )
}
