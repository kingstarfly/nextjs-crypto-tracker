import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import React from "react";
import Coin from "./Coin";

const CoinList = ({ data }) => {
  return (
    <Table variant="simple" colorScheme="whiteAlpha">
      {data.map((coinData) => {
        return <Coin coinData={coinData} key={coinData.id} />;
      })}
    </Table>
  );
};

export default CoinList;

{
}
