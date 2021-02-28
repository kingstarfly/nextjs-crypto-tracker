import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Shell from "./Shell";

const CoinCard = ({ coinData }) => {
  return (
    <Shell color="white">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        h="full"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          minH="70vh"
          w="30vw"
          borderRadius="3xl"
          borderColor="whatsapp.200"
          borderWidth="thick"
          py={8}
        >
          <Image src={coinData.image.large} boxSize={200} />
          <Flex
            mt={20}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            h="20vh"
          >
            <Text fontWeight="medium" fontSize="5xl">
              {coinData.name.toUpperCase()}
            </Text>
            <Text fontSize="xl">{coinData.symbol}</Text>
            <Text fontSize="4xl">
              US${coinData.market_data.current_price.usd}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Shell>
  );
};

export default CoinCard;
