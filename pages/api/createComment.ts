// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-08-31',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
}

const client = sanityClient(config)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, mobno, service } = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'order',
      product: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      mobno,
      service,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Cound not place order', error })
  }
  res.status(200).json({ message: 'Order submitted' })
}