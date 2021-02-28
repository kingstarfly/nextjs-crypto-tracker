import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import fetcher from "../../utils/fetcher";
import { Flex } from "@chakra-ui/react";
import CoinCard from "../../components/CoinCard";

const SingleCoin = ({ coinData }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/coin/${id}`, fetcher);
  if (error) return <div>Error</div>;

  return (
    <Flex>
      <CoinCard coinData={data || coinData} />
    </Flex>
  );
};

export default SingleCoin;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  );
  const coins = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = coins.map((coin) => `/coin/${coin.id}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.id}`
  );
  const coinData = await res.json();

  // Pass post data to the page via props
  return { props: { coinData } };
}
