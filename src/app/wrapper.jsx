"use client";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "../../lib/theme";

export default function Wrappers({
  children,
}) {
  return (
        <ChakraProvider theme={theme}>
          <Container minW={"1100px"} maxW={"1500px"}>
            {children}
          </Container>
        </ChakraProvider>
    
  );
}
