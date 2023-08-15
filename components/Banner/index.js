"use client";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex
      position={"relative"}
      paddingTop={"100px"}
      width="100%"
      gap={"20px"}
      alignItems={"center"}
      flexDirection="column"
    >
      <Image
        src="/assets/images/uzor-1.png"
        height={"100%"}
        w={"30%"}
        zIndex={-10}
        top={"0"}
        position={"absolute"}
        left={"30px"}
      ></Image>
      <Text fontSize="58px" lineHeight="72px" fontWeight="400" mb={2}>
        <Text
          as="span"
          bgGradient="linear(to-r, #8EC300, #0091F0)"
          bgClip="text"
        >
          0%
        </Text>{" "}
        Performance Fees
      </Text>
      <Text fontSize="20px" mb={4}>
        Low-cost yield aggregator. Lower commissions, higher profits. Zap from
        any token.
      </Text>
      <Image
        src="/assets/images/uzor-2.png"
        height={"100%"}
        w={"30%"}
        zIndex={-10}
        bottom={"-100px"}
        position={"absolute"}
        right={"30px"}
      ></Image>
      <Button
        background={"accent.main"}
        color="white"
        borderRadius={"20px"}
        w={"560px"}
        px={"52px"}
        py={"32px"}
        size="lg"
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default Banner;
