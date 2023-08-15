"use client";
import React, { useState } from "react";
import { Box, Button, Grid, Input, Select, Text, Flex } from "@chakra-ui/react";
import TableDeposit from "./table";
const years = ["1 year", "5 years", "10 years"];

function DepositCalculator() {
  const [inputValue, setInputValue] = useState("$");
  const [selectedYear, setSelectedYear] = useState(""); // State to keep track of the selected year

  return (
    <React.Fragment>
      <Grid templateColumns="1fr" mt={"10%"} gap={4}>
        <Box
          display="grid"
          gridTemplateColumns="5fr 4fr 2fr"
          gap={"24px"}
          alignItems="center"
        >
          <Box>
            <Text mb={2} variant={"secondary"}>
              Your deposit
            </Text>
            <Input
              px={"24px"}
              textAlign={"center"}
              borderRadius="16px"
              py={"32px"}
              value={inputValue}
              color="accent.main"
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove all non-numeric characters
                setInputValue("$" + newValue);
              }}
              placeholder="Type here..."
            />
          </Box>
          <Box>
            <Text variant={"secondary"} mb={2}>
              Years
            </Text>
            <Flex gap={"24px"}>
              {years.map((year) => (
                <Button
                  key={year} // Don't forget to add a key for each mapped element
                  borderRadius="16px"
                  px={"24px"}
                  fontWeight={300}
                  w={"190px"}
                  py={"32px"}
                  color={selectedYear === year ? "white" : "#737373"}
                  borderColor={
                    selectedYear === year ? "accent.main" : "#737373"
                  }
                  variant={"outline"}
                  _hover={{
                    background: "transparent",
                  }}
                  onClick={() => setSelectedYear(year)} // Update selected year on button click
                >
                  {year}
                </Button>
              ))}
            </Flex>
          </Box>
          <Box>
            <Text variant={"secondary"} mb={2}>
              Commission
            </Text>
            <Select
              w={"190px"}
              height={"65px"}
              borderRadius="16px"
              borderColor={"#737373"}
              fontWeight={300}
            >
              <option value="option1">5%</option>
              <option value="option2">35%</option>
              <option value="option3">55%</option>
            </Select>
          </Box>
        </Box>
      </Grid>
      <TableDeposit />
    </React.Fragment>
  );
}

export default DepositCalculator;
