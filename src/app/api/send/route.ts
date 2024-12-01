import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type NodemailerError = Error & {
  code?: string;
  command?: string;
};

export async function POST(request: Request) {
  // Initialize logging object
  const debugLog = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    requestId: crypto.randomUUID(),
    stages: [] as string[],
    envVars: {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS,
      emailUserLength: process.env.EMAIL_USER?.length || 0,
      emailPassLength: process.env.EMAIL_PASS?.length || 0
    }
  };

  try {
    debugLog.stages.push('Request started');
    
    // Log request headers (excluding sensitive data)
    const safeHeaders = Object.fromEntries(
      Array.from(request.headers.entries())
        .filter(([key]) => !key.includes('cookie') && !key.includes('authorization'))
    );
    debugLog.stages.push('Headers processed');
    console.log('Request headers:', safeHeaders);

    const body = await request.json();
    debugLog.stages.push('Body parsed');
    
    // Log sanitized request body
    const sanitizedBody = {
      hasName: !!body.name,
      nameLength: body.name?.length,
      hasEmail: !!body.email,
      emailLength: body.email?.length,
      hasMessage: !!body.message,
      messageLength: body.message?.length
    };
    console.log('Sanitized request body:', sanitizedBody);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      debugLog.stages.push('Validation failed');
      console.log('Debug log at validation failure:', debugLog);
      return NextResponse.json(
        { message: 'Missing required fields', debug: debugLog },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      debugLog.stages.push('Environment variables missing');
      console.error('Missing credentials debug log:', debugLog);
      return NextResponse.json(
        { 
          message: 'Internal server error: Missing email configuration',
          debug: debugLog 
        },
        { status: 500 }
      );
    }

    debugLog.stages.push('Creating transport');
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
      logger: true // Enable built-in logger
    });

    debugLog.stages.push('Verifying transport');
    try {
      await transporter.verify();
      debugLog.stages.push('Transport verified');
    } catch (verifyError) {
      debugLog.stages.push(`Transport verification failed: ${(verifyError as Error).message}`);
      throw verifyError;
    }

    debugLog.stages.push('Sending mail');
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

    debugLog.stages.push('Mail sent successfully');
    console.log('Success debug log:', { ...debugLog, mailId: mailResponse.messageId });

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        messageId: mailResponse.messageId,
        debug: debugLog 
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    debugLog.stages.push('Error occurred');
    
    if (error instanceof Error) {
      const nodeMailerError = error as NodemailerError;
      
      const errorDetails = {
        name: nodeMailerError.name,
        message: nodeMailerError.message,
        code: nodeMailerError.code,
        stack: process.env.NODE_ENV === 'development' ? nodeMailerError.stack : undefined
      };

      console.error('Full error debug log:', {
        ...debugLog,
        error: errorDetails
      });

      return NextResponse.json(
        { 
          message: 'Internal server error: Unable to send email',
          details: nodeMailerError.message,
          debug: debugLog,
          error: errorDetails
        },
        { status: 500 }
      );
    }

    // Fallback for unknown errors
    console.error('Unknown error debug log:', {
      ...debugLog,
      error: 'Unknown error type'
    });

    return NextResponse.json(
      { 
        message: 'Internal server error: An unexpected error occurred',
        details: 'Unknown error',
        debug: debugLog
      },
      { status: 500 }
    );
  }
}