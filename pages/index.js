import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import useSWR from "swr";

import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";
import fetcher from "../utils/fetcher";
import { LogoIcon } from "../styles/icon";
import Shell from "../components/Shell";

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { data, error } = useSWR("/api/coin", fetcher, {
    refreshInterval: 1000,
  });
  if (error) return <div>Error</div>;
  if (!data) return <div>loading...</div>;

  const filteredCoinData = data?.filter((coinData) =>
    coinData.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Shell>
      <Flex
        as="main"
        direction="column"
        alignItems="center"
        margin="0 auto"
        maxW="50vw"
        pt={0}
        pb={16}
        px={4}
        w="100vw"
        minH="100vh"
      >
        <LogoIcon boxSize={300} color="turquoise" />
        <Heading color="darkgoldenrod" fontSize="5xl" mt={-16} mb={8}>
          Crypto Tracker
        </Heading>
        <SearchBar setSearchTerm={setSearchTerm} />
        {data && <CoinList data={filteredCoinData} />}
      </Flex>
    </Shell>
  );
}
