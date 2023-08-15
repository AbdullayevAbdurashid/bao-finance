import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Image,
  TableContainer,
  Flex,
  chakra,
  Button,
} from "@chakra-ui/react";
const rows = [1, 2, 3, 4, 5];
function TableDeposit() {
  return (
    <TableContainer mt={"40px"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>APY</Th>
            <Th>
              {" "}
              <chakra.span color={"accent.main"}>BAU</chakra.span> Total Yield{" "}
            </Th>
            <Th>Total Yield Other</Th>
            <Th>
              {" "}
              <chakra.span color={"accent.main"}>BAU</chakra.span> FEES
            </Th>
            <Th>Other FEES</Th>
          </Tr>
        </Thead>
        <Tbody className="table">
          {rows.map((number) => (
            <Tr key={number} background={"#272726"} padding={"38px"}>
              <Td>
                <Flex alignItems="center" gap={"10px"}>
                  <Image
                    backgroundColor={"#E5E8DF"}
                    borderRadius="30px"
                    padding={2}
                    src="/assets/images/crypto-1.png"
                  ></Image>
                  DYDX-ETH
                </Flex>
              </Td>
              <Td>10%</Td>
              <Td color="accent.main"> $ 1100 </Td>
              <Td>$ 1050</Td>
              <Td color="accent.main">$ 0.5</Td>
              <Td>$ 50</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button
        py={"40px"}
        w={"100%"}
        fontSize={"1.2rem"}
        color="white"
        fontWeight={300}
        background="#8DC22D"
      >
        <Flex alignItems="center" gap={"10px"}>
          More vaults
          <svg
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
        </Flex>
      </Button>
    </TableContainer>
  );
}

export default TableDeposit;
