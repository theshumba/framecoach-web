import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { Resend } from 'npm:resend';
import { render } from 'npm:@react-email/render';
import { BetaWelcome } from '../../../emails/BetaWelcome.tsx';

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

interface BetaSignupRecord {
  id: string;
  email: string;
  name: string;
  camera: string;
  role: string;
  experience: string;
  created_at: string;
}

interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE';
  table: string;
  record: BetaSignupRecord;
  schema: string;
  old_record: BetaSignupRecord | null;
}

serve(async (req: Request) => {
  try {
    const payload: WebhookPayload = await req.json();
    const { record } = payload;

    // Extract first name from full name
    const firstName = record.name.split(' ')[0] || record.name;

    // Render the React Email template to HTML
    const emailHtml = render(BetaWelcome({ firstName }));

    // Send the welcome email via Resend
    const { data, error } = await resend.emails.send({
      from: 'FrameCoach <hello@framecoach.app>',
      to: record.email,
      subject: "You're in.",
      html: emailHtml,
    });

    if (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Email sent successfully:', data);

    return new Response(
      JSON.stringify({ success: true, emailId: data?.id }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
});
