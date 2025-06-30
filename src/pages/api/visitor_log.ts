import { VercelRequest, VercelResponse } from '@vercel/node';
import clientPromise from '../../../lib/db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const { route, userAgent } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    await db.collection('visitor_logs').insertOne({
      route,
      userAgent: userAgent || req.headers['user-agent'],
      timestamp: new Date(),
    });

    return res.status(200).json({ message: 'Visitor log saved' });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}