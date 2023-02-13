// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// TwitterAPI Is Now Paid Hence This Wasn't completed
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'

type Data = {
  tweets: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ tweets: 'yes i hear you' })
}
