// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const apiRes = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
    headers: {
      "X-CMC_PRO_API_KEY": '66758216-4978-44d5-b3d3-7c50850a6567'
    }
  })
  const data = await apiRes.json()
  console.log(data)
  res.status(200).json(data);
}
