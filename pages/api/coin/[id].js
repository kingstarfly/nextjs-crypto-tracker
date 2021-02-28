// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const id = req.query.id;
  // res.json(id);
  const result = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await result.json();
  res.status(200).json(data);
};
