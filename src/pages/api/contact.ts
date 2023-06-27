import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, web, design, message } = req.body;

  const user = process.env.USER;
  const pass = process.env.PASS;

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

  try {
    const response = await transporter.sendMail({
      from: user,
      to: 'melissa.dtcc@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Website: ${web}</p>
      <p>Design: ${design}</p>
      <p>Message: ${message}</p>
      `,
    });
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
