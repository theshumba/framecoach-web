import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

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

const generateEmailHtml = (firstName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>You're in.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
  <style>
    :root { color-scheme: dark; supported-color-schemes: dark; }
    .dark-logo { display: none !important; }
    .light-logo { display: block !important; }
    @media (prefers-color-scheme: dark) {
      .dark-logo { display: block !important; }
      .light-logo { display: none !important; }
      body, .body { background-color: #211C21 !important; }
      .card { background-color: rgba(42, 36, 40, 0.9) !important; }
      p, li, span { color: #E6E8E6 !important; }
    }
  </style>
</head>
<body class="body" style="margin: 0; padding: 0; background-color: #211C21 !important; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <!-- Outer container with padding -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #211C21 !important; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Main email container -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%;">

          <!-- Logo / Header -->
          <tr>
            <td style="padding-bottom: 40px; text-align: center;" align="center">
              <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                <tr>
                  <td style="vertical-align: middle; padding-right: 12px;">
                    <!-- FrameCoach logo - light mode (for light backgrounds) -->
                    <img src="https://framecoach.io/logo-dark.png" alt="FrameCoach" class="light-logo" width="40" height="32" style="display: block;" />
                    <!-- FrameCoach logo - dark mode (for dark backgrounds) -->
                    <img src="https://framecoach.io/logo.png" alt="FrameCoach" class="dark-logo" width="40" height="32" style="display: none;" />
                  </td>
                  <td style="vertical-align: middle;">
                    <!-- FrameCoach text -->
                    <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 800; color: #FFFFFF !important; letter-spacing: -0.02em;">FrameCoach</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main content card -->
          <tr>
            <td class="card" style="background: rgba(42, 36, 40, 0.9) !important; background-color: #2A2428 !important; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 48px 40px;">

              <!-- Beta badge -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: #DF2935; color: #FFFFFF; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 6px 12px; border-radius: 6px;">Beta Access</span>
                  </td>
                </tr>
              </table>

              <!-- Greeting -->
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">Hey ${firstName},</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">Thanks for signing up.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">We got your request for beta access. You're on the list.</p>

              <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">We're not building this for theoretical users or case studies. We're building it for people like you, people who actually work hard, deal with real constraints and are figuring it out on the ground.</p>

              <!-- Divider -->
              <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 32px 0;"></div>

              <!-- Section: Access is coming soon -->
              <h2 style="margin: 0 0 16px 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 700; color: #DF2935; line-height: 1.3;">Access is coming soon</h2>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">Watch your inbox.</p>

              <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">We're rolling out in small waves over the upcoming days and weeks. When it's your turn, you'll get a link. No forms. No extra steps. Just access.</p>

              <!-- Divider -->
              <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 32px 0;"></div>

              <!-- Section: What this actually is -->
              <h2 style="margin: 0 0 16px 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 700; color: #DF2935; line-height: 1.3;">What this actually is</h2>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">This is early. Like, really early.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">Some things will work better than you expect. Some things will be rough. Some features you might assume exist won't be there yet. That's the point of a beta.</p>

              <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">But here's what you'll be able to do:</p>

              <ul style="margin: 0 0 20px 0; padding-left: 24px; color: #E6E8E6;">
                <li style="margin-bottom: 12px; font-size: 16px; line-height: 1.6;">Get camera-specific guidance for your shoots</li>
                <li style="margin-bottom: 12px; font-size: 16px; line-height: 1.6;">Turn your creative intent into actual settings</li>
                <li style="margin-bottom: 12px; font-size: 16px; line-height: 1.6;">See the logic behind every recommendation</li>
                <li style="margin-bottom: 0; font-size: 16px; line-height: 1.6;">Help us figure out what matters and what doesn't</li>
              </ul>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">You're not testing a finished product. You're helping us build it.</p>

              <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">Your feedback determines what this becomes when we actually launch.</p>

              <!-- Divider -->
              <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 32px 0;"></div>

              <!-- Section: Why we're building this -->
              <h2 style="margin: 0 0 16px 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 700; color: #DF2935; line-height: 1.3;">Why we're building this</h2>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">Here's the truth: We built FrameCoach because we were tired of the b*^$!>%?.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">Tired of wasting the first 30 minutes of a shoot day testing settings. Tired of editors emailing, "can you reshoot this? The angles don't match?" Tired of footage that looked perfect on set but broke in post. Tired of guessing when we should have been confident.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">We wanted a tool that sits at the decision point. That knows your camera. That understands your constraints. That gives you a clear answer with a clear reason.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">But we don't know if we're solving the actual problem yet.</p>

              <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">That's where you come in.</p>

              <!-- Divider -->
              <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 32px 0;"></div>

              <!-- Section: What we need from you -->
              <h2 style="margin: 0 0 16px 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 700; color: #DF2935; line-height: 1.3;">What we need from you</h2>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">Brutal honesty.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">When something doesn't work—tell us.<br>
              When something confuses you—tell us.<br>
              When you expect a feature that isn't there, tell us.<br>
              When a recommendation falls flat on a real shoot, tell us.</p>

              <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">We can't fix what we don't know is broken.</p>

              <!-- Divider -->
              <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 32px 0;"></div>

              <!-- Section: One last thing -->
              <h2 style="margin: 0 0 16px 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 700; color: #DF2935; line-height: 1.3;">One last thing</h2>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">We're building FrameCoach because filmmakers deserve better tools. Tools that respect your time. Tools that make you more confident without making you dependent. Tools that actually teach.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">But we can't build that alone.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">We need people willing to push this thing to its limits. People who'll tell us when it breaks. People who understand what actually matters when you're on set with the clock running.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">You're one of those people.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">Thank you for reaching out. We don't take that lightly.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">We'll send your access link in the coming days or weeks. Until then, if you have any questions or want to share more about what you're working on, just reply to this email.</p>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">See you soon.</p>

              <p style="margin: 0 0 0 0; font-size: 16px; line-height: 1.6; color: #E6E8E6;">— The FrameCoach Team</p>

            </td>
          </tr>

          <!-- Footer / PS -->
          <tr>
            <td style="padding-top: 24px; text-align: center;">
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #C8CAC8; font-style: italic;">P.S. Keep an eye on your inbox. Your link is coming in the upcoming days and weeks. If you don't see it soon, reply to this email.</p>
            </td>
          </tr>

          <!-- Spacer -->
          <tr>
            <td style="padding-top: 40px;"></td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

serve(async (req: Request) => {
  try {
    const payload: WebhookPayload = await req.json();
    const { record } = payload;

    // Extract first name from full name, with fallback to "there" if empty
    const firstName = record.name && record.name.trim()
      ? record.name.split(' ')[0]
      : 'there';

    // Send the welcome email via Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'FrameCoach <hello@info.framecoach.io>',
        reply_to: 'contact@framecoach.io',
        to: record.email,
        subject: "You're in.",
        html: generateEmailHtml(firstName),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Error sending email:', data);
      return new Response(
        JSON.stringify({ success: false, error: data }),
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
