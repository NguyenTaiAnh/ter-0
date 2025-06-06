import { headers } from 'next/headers'
 
export async function GET(request: Request) {
    console.log({request})
  const headersList = await headers()
  const referer = headersList.get('referer')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer || '' },
  })
}