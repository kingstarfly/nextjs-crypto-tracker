import { Box, Flex, Image, Td, Text } from "@chakra-ui/react";
import React from "react";

const Coin = ({ coinData }) => {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    price_change_percentage_24h,
    price_change_24h,
  } = coinData;
  return (
    <Box as="tr" color="whiteAlpha.800">
      <Td>
        <Flex justifyContent="flex-start" alignItems="center">
          <Image src={image} boxSize={8} mr={4} />
          <Text>{name}</Text>
        </Flex>
      </Td>

      <Td>{symbol.toUpperCase()}</Td>
      <Td isNumeric>
        <Text>
          US$
          <Text as="span" fontWeight="semibold">
            {current_price}
          </Text>
        </Text>
      </Td>
      <Td
        isNumeric
        color={
          price_change_percentage_24h < 0
            ? "red.400"
            : price_change_percentage_24h > 0
            ? "green.400"
            : "grey"
        }
      >
        {price_change_percentage_24h}%
      </Td>
    </Box>
  );
};

export default Coin;
