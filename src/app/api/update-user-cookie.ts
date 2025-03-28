// pages/api/update-user-cookie.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const user = req.body;
  setCookie(null,'currentUser', JSON.stringify(user), {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 tuần
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  res.status(200).json({ message: 'Cookie updated' });
}