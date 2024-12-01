import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type NodemailerError = Error & {
  code?: string;
  command?: string;
};

export async function POST(request: Request) {
  try {
    console.log('Starting email send process...');

    const body = await request.json();
    console.log('Request body:', body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.log('Missing fields:', { name, email, message });
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    console.log('Environment check:', {
      hasUser: !!user,
      hasPass: !!pass,
      userLength: user?.length,
      passLength: pass?.length,
    });

    if (!user || !pass) {
      console.error('Missing email credentials');
      return NextResponse.json(
        { message: 'Internal server error: Missing email configuration' },
        { status: 500 }
      );
    }

    console.log('Creating transport...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass,
      },
      debug: true,
    });

    console.log('Verifying transport...');
    await transporter.verify();

    console.log('Sending mail...');
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

    console.log('Mail sent successfully:', mailResponse);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      const nodeMailerError = error as NodemailerError;
      
      console.error('Full error details:', {
        name: nodeMailerError.name,
        message: nodeMailerError.message,
        stack: nodeMailerError.stack,
        code: nodeMailerError.code,
      });

      return NextResponse.json(
        { 
          message: 'Internal server error: Unable to send email',
          details: nodeMailerError.message 
        },
        { status: 500 }
      );
    }

    // Fallback for unknown error types
    return NextResponse.json(
      { 
        message: 'Internal server error: An unexpected error occurred',
        details: 'Unknown error'
      },
      { status: 500 }
    );
  }
}