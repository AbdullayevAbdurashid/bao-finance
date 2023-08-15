"use client";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <Flex
        as="header"
        className="header"
        align="center"
        justify="space-between"
        py={4}
        px={8}
      >
        <Box>
          <NextLink href="/">
            <Image
              width="230"
              height="60"
              src="/assets/images/logo.png"
              alt="Logo"
            />
          </NextLink>
        </Box>
        <Box align="center">
          <Text color={"accent.main"} fontSize={"0.8rem"} mb={2}>
            {" "}
            Soon
          </Text>
          <Link mx={4}>Vaults</Link>
          <Link mx={4}>Dashboard</Link>
          <Link mx={4} position="relative">
            Docs{" "}
            <svg
              style={{ position: "absolute", left: "60px", bottom: "25px" }}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 2"
                d="M0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683418 14.0976 1.31658 14.0976 1.70711 13.7071L0.292893 12.2929ZM14 1C14 0.447716 13.5523 4.87118e-07 13 2.34237e-07L4 1.03503e-06C3.44771 6.97852e-07 3 0.447716 3 1C3 1.55229 3.44771 2 4 2L12 2L12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10L14 1ZM1.70711 13.7071L13.7071 1.70711L12.2929 0.292894L0.292893 12.2929L1.70711 13.7071Z"
                fill="white"
              />
            </svg>
          </Link>
        </Box>
        <Box display="flex" alignItems="center" gap={4}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#547FEF" />
            <path
              d="M15.997 2.00011L15.8076 2.63819V21.1522L15.997 21.3396L24.6609 16.2597L15.997 2.00011Z"
              fill="#BFCDFA"
            />
            <path
              d="M15.9976 2.00011L7.3335 16.2597L15.9976 21.3396V12.3534V2.00011Z"
              fill="white"
            />
            <path
              d="M15.9978 22.9667L15.8911 23.0958V29.6908L15.9978 29.9999L24.6671 17.8895L15.9978 22.9667Z"
              fill="#BFCCF9"
            />
            <path
              d="M15.9976 29.9999V22.9667L7.3335 17.8895L15.9976 29.9999Z"
              fill="white"
            />
            <path
              d="M15.9976 21.3396L24.6615 16.2597L15.9976 12.3534V21.3396Z"
              fill="#7799F2"
            />
            <path
              d="M7.3335 16.2597L15.9976 21.3396V12.3534L7.3335 16.2597Z"
              fill="#C0CDFA"
            />
          </svg>

          <Text color={"accent.yellow"} display="inline-block">
            Connect wallet{" "}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
