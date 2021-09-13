import { Stack, Button, useColorModeValue, Box } from "@chakra-ui/react";
import React from "react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: "pink.500",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg={useColorModeValue('gray.400', 'gray.800')}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg={useColorModeValue('gray.400', 'gray.800')}
        >
          3
        </Button>
      </Stack>
    </Stack>
  );
}
