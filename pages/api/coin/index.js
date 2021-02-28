// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const result = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  );
  const data = await result.json();
  res.status(200).json(data);
};
