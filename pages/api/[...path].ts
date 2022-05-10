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
  | { name: string };

const proxy = httpProxy.createProxyServer();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return new Promise((resolve) => {
    let cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    // dont send cookie to API Server
    req.headers.cookie = '';
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.once('proxyRes', () => {
      return resolve(true);
    });
  });
}
