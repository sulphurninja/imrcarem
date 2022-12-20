// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "service"] {
_id,
  ...
} | order(_createdAt asc)`;

type Data = {
  services: Service[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const services: Service[] = await sanityClient.fetch(query);
  console.log(services);
  res.status(200).json({ services });
}
