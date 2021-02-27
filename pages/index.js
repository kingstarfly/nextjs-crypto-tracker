import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import useSWR from "swr";

import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";
import fetcher from "../utils/fetcher";

export default function Home() {
  const { data, error } = useSWR("/api/crypto", fetcher);
  if (error) return <div>Error</div>;
  // if (data === null) return null;
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredCoinData = data?.filter((coinData) =>
    coinData.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box bgColor="blackAlpha.900">
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        as="main"
        direction="column"
        alignItems="center"
        margin="0 auto"
        maxW="50vw"
        py={16}
        px={4}
        w="100vw"
        minH="100vh"
      >
        <Heading color="darkgoldenrod" fontSize="5xl" mb={8}>
          Crypto Tracker
        </Heading>
        <SearchBar setSearchTerm={setSearchTerm} />
        {data && <CoinList data={filteredCoinData} />}
      </Flex>
    </Box>
  );
}
