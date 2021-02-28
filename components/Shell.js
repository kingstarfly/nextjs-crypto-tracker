import React from "react";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Shell({ children, ...props }) {
  return (
    <Box bgColor="blackAlpha.900" w="full" minH="100vh" {...props}>
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Box>
  );
}
