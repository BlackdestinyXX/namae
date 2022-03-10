import { send, sendError, fetch } from '../../../util/http';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  const { query } = req.query;

  if (!query || typeof query !== 'string') {
    return sendError(res, new Error('No query given'));
  }

  if (/[^a-zA-Z0-9_-]/.test(query)) {
    return sendError(res, new Error('Invalid characters'));
  }

  try {
    const response = await fetch(
      `https://archlinux.org/packages/?sort=&q=${encodeURIComponent(query)}`,
      'GET'
    ).then((res) => res.text());
    const availability = !/<div id="exact-matches"/.test(response);
    send(res, { availability });
  } catch (err: any) {
    sendError(res, err);
  }
}
