// app/api/send/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type NodemailerError = Error & {
  code?: string;
  command?: string;
};

export async function POST(request: Request) {
  // Log environment variable status
  console.log('API Route Environment Check:', {
    timestamp: new Date().toISOString(),
    nodeEnv: process.env.NODE_ENV,
    emailUserExists: !!process.env.EMAIL_USER,
    emailUserLength: process.env.EMAIL_USER?.length ?? 0,
    emailPassExists: !!process.env.EMAIL_PASS,
    emailPassLength: process.env.EMAIL_PASS?.length ?? 0
  });

  try {
    // First verify we have the required environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS
      });
      
      return NextResponse.json({
        message: 'Server configuration error',
        details: 'Email service not properly configured'
      }, { status: 500 });
    }

    // Log that we're about to parse the request
    console.log('Parsing request body...');
    const body = await request.json();
    
    const { name, email, message } = body;

    // Validate request data
    if (!name || !email || !message) {
      console.log('Invalid request data:', { hasName: !!name, hasEmail: !!email, hasMessage: !!message });
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Log transport creation attempt
    console.log('Creating nodemailer transport...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug output
    });

    // Verify transport configuration
    console.log('Verifying transport configuration...');
    try {
      await transporter.verify();
      console.log('Transport verification successful');
    } catch (verifyError) {
      console.error('Transport verification failed:', verifyError);
      throw verifyError;
    }

    // Attempt to send email
    console.log('Attempting to send email...');
    const mailResponse = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'melissakipp.az@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log('Email sent successfully:', {
      messageId: mailResponse.messageId,
      response: mailResponse.response
    });

    return NextResponse.json({ 
      message: 'Email sent successfully',
      messageId: mailResponse.messageId
    }, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      const nodeMailerError = error as NodemailerError;
      
      console.error('Email send error:', {
        name: nodeMailerError.name,
        message: nodeMailerError.message,
        code: nodeMailerError.code,
        command: nodeMailerError.command
      });

      return NextResponse.json({
        message: 'Failed to send email',
        details: nodeMailerError.message
      }, { status: 500 });
    }

    console.error('Unknown error:', error);
    return NextResponse.json({
      message: 'An unexpected error occurred',
      details: 'Unknown error type'
    }, { status: 500 });
  }
}

// Add a test endpoint to verify environment variables
export async function GET(request: Request) {
  return NextResponse.json({
    status: 'API Route Operational',
    environment: {
      nodeEnv: process.env.NODE_ENV,
      emailConfigured: {
        userExists: !!process.env.EMAIL_USER,
        userLength: process.env.EMAIL_USER?.length ?? 0,
        passExists: !!process.env.EMAIL_PASS,
        passLength: process.env.EMAIL_PASS?.length ?? 0
      }
    }
  });
}