import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
  
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const user = process.env.USER;
  const pass = process.env.PASS;

  if (!user || !pass) {
    return res.status(500).json({ 
      message: 'Internal server error: Please change your username and/or password' 
    });
  }
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // upgrade later with STARTTLS
      auth: {
        user: user,
        pass: pass,
      },
    });
  
    const mailResponse = await transporter.sendMail({
      from: user,
      to: 'melissakipp.az@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
    });
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
