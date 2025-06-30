import { VercelRequest, VercelResponse } from '@vercel/node';
import clientPromise from '../../../lib/db';
import { transporter, mailOptions } from '../../../lib/mail';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const { name, email, reason } = req.body;
  if (!name || !email || !reason) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    await db.collection('cv_requests').insertOne({ name, email, reason, createdAt: new Date() });

    await transporter.sendMail({
      ...mailOptions,
      subject: 'New CV Access Request',
      text: `Name: ${name}\nEmail: ${email}\nReason: ${reason}`,
    });

    return res.status(200).json({ message: 'Request submitted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}