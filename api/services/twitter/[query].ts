import { VercelRequest, VercelResponse } from '@vercel/node';
import { fetch, send, sendError } from '../../../util/http';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  const { query } = req.query;

  if (!query || typeof query !== 'string') {
    return sendError(res, new Error('No query given'));
  }

  if (/[^a-zA-Z0-9_]/.test(query)) {
    return sendError(res, new Error('Invalid characters'));
  }

  try {
    const response = await fetch(
      `https://api.twitter.com/i/users/username_available.json?username=${query}`,
      'GET'
    ).then((res) => res.json());
    const availability = response.valid;
    send(res, { availability });
  } catch (err: any) {
    sendError(res, err);
  }
}
