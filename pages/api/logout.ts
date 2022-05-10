// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

export const config = {
  api: {
    bodyParser: false,
  },
};

type Data =
  | {
      data: any[];
      pagination: any;
    }
  | { message: string };

const proxy = httpProxy.createProxyServer();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let cookies = new Cookies(req, res);
  cookies.set('access_token');

  res.status(200).json({ message: 'logout successfully' });
}
