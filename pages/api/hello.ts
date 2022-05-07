// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface api_response {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

type Data = {
  name: api_response
}

const fetchData = async () => {
  const data = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=9KgkPuXuwGJMKHP1Jc4ZmcAiZASGMnoFzRWvFOWV'
  )
  const my_data = await data.json()
  return my_data
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetchData()
  res.status(200).json(data)
}
