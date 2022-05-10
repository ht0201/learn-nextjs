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
  if (req.method !== 'POST') {
    res.status(404).json({ message: 'method not supported' });
  }

  console.log('login');

  return new Promise((resolve) => {
    // dont send cookie to API Server
    req.headers.cookie = '';

    proxy.once('proxyRes', (proxyRes, req, res) => {
      let body = '';

      // dang lay data
      proxyRes.on('data', function (chunk) {
        body += chunk;
      });

      // da lay data xong
      proxyRes.on('end', function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);
          console.log(body);
          let cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== 'development',
          });
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });
          (res as NextApiResponse)
            .status(200)
            .json({ message: 'login successfully' });
        } catch (error) {
          (res as NextApiResponse)
            .status(500)
            .json({ message: 'login failed' });
        }
        resolve(true);
      });
    });

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
