import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ContextAPI } from "~/ContextAPI";
import { ColorMode } from "./ColorMode";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const data = useContext(ContextAPI);

  console.log(data)



  return (
    <Box px="4" width="100%">
      <Flex
        as="header"
        w="100%"
        maxWidth={1240}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
        justify="space-between"
      >

        <Logo />

        {isWideVersion && <SearchBox />}

        <Flex
          align="center"
          ml="auto"
        >
          <ColorMode />

          <Profile showProfileData={isWideVersion} />

        </Flex>
      </Flex>
    </Box>
  )
}
