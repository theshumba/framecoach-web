import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface BetaWelcomeProps {
  firstName: string;
}

export const BetaWelcome = ({ firstName = 'there' }: BetaWelcomeProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Text style={greeting}>Hey {firstName},</Text>

          <Text style={paragraph}>Thanks for signing up.</Text>

          <Text style={paragraph}>
            We got your request for beta access. You're on the list.
          </Text>

          <Text style={paragraph}>
            We're not building this for theoretical users or case studies. We're
            building it for people like you, people who actually work hard, deal
            with real constraints and are figuring it out on the ground.
          </Text>

          <Hr style={hr} />

          <Heading as="h2" style={heading}>
            Access is coming soon
          </Heading>

          <Text style={paragraph}>Watch your inbox.</Text>

          <Text style={paragraph}>
            We're rolling out in small waves over the upcoming days and weeks.
            When it's your turn, you'll get a link. No forms. No extra steps.
            Just access.
          </Text>

          <Hr style={hr} />

          <Heading as="h2" style={heading}>
            What this actually is
          </Heading>

          <Text style={paragraph}>This is early. Like, really early.</Text>

          <Text style={paragraph}>
            Some things will work better than you expect. Some things will be
            rough. Some features you might assume exist won't be there yet.
            That's the point of a beta.
          </Text>

          <Text style={paragraph}>But here's what you'll be able to do:</Text>

          <Section style={listSection}>
            <Text style={listItem}>
              - Get camera-specific guidance for your shoots
            </Text>
            <Text style={listItem}>
              - Turn your creative intent into actual settings
            </Text>
            <Text style={listItem}>
              - See the logic behind every recommendation
            </Text>
            <Text style={listItem}>
              - Help us figure out what matters and what doesn't
            </Text>
          </Section>

          <Text style={paragraph}>
            You're not testing a finished product. You're helping us build it.
          </Text>

          <Text style={paragraph}>
            Your feedback determines what this becomes when we actually launch.
          </Text>

          <Hr style={hr} />

          <Heading as="h2" style={heading}>
            Why we're building this
          </Heading>

          <Text style={paragraph}>
            Here's the truth: We built FrameCoach because we were tired of the
            bullshit.
          </Text>

          <Text style={paragraph}>
            Tired of wasting the first 30 minutes of a shoot day testing
            settings. Tired of editors emailing, "can you reshoot this? The
            angles don't match?" Tired of footage that looked perfect on set but
            broke in post. Tired of guessing when we should have been confident.
          </Text>

          <Text style={paragraph}>
            We wanted a tool that sits at the decision point. That knows your
            camera. That understands your constraints. That gives you a clear
            answer with a clear reason.
          </Text>

          <Text style={paragraph}>
            But we don't know if we're solving the actual problem yet.
          </Text>

          <Text style={paragraph}>That's where you come in.</Text>

          <Hr style={hr} />

          <Heading as="h2" style={heading}>
            What we need from you
          </Heading>

          <Text style={paragraph}>Brutal honesty.</Text>

          <Section style={listSection}>
            <Text style={listItem}>When something doesn't work—tell us.</Text>
            <Text style={listItem}>When something confuses you—tell us.</Text>
            <Text style={listItem}>
              When you expect a feature that isn't there, tell us.
            </Text>
            <Text style={listItem}>
              When a recommendation falls flat on a real shoot, tell us.
            </Text>
          </Section>

          <Text style={paragraph}>
            We can't fix what we don't know is broken.
          </Text>

          <Hr style={hr} />

          <Heading as="h2" style={heading}>
            One last thing
          </Heading>

          <Text style={paragraph}>
            We're building FrameCoach because filmmakers deserve better tools.
            Tools that respect your time. Tools that make you more confident
            without making you dependent. Tools that actually teach.
          </Text>

          <Text style={paragraph}>But we can't build that alone.</Text>

          <Text style={paragraph}>
            We need people willing to push this thing to its limits. People
            who'll tell us when it breaks. People who understand what actually
            matters when you're on set with the clock running.
          </Text>

          <Text style={paragraph}>You're one of those people.</Text>

          <Text style={paragraph}>
            Thank you for reaching out. We don't take that lightly.
          </Text>

          <Text style={paragraph}>
            We'll send your access link in the coming days or weeks. Until then,
            if you have any questions or want to share more about what you're
            working on, just reply to this email.
          </Text>

          <Text style={paragraph}>See you soon.</Text>

          <Section style={signatureSection}>
            <Text style={signature}>— The FrameCoach Team</Text>
            <Text style={signatureTitle}>Founder, FrameCoach</Text>
          </Section>

          <Text style={ps}>
            P.S. Keep an eye on your inbox. Your link is coming in the upcoming
            days and weeks. If you don't see it soon, reply to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const greeting = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#1a1a1a',
  marginBottom: '16px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#1a1a1a',
  marginBottom: '16px',
};

const heading = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#1a1a1a',
  marginTop: '24px',
  marginBottom: '16px',
};

const hr = {
  borderColor: '#e5e5e5',
  marginTop: '32px',
  marginBottom: '32px',
};

const listSection = {
  marginBottom: '16px',
};

const listItem = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#1a1a1a',
  marginBottom: '8px',
  paddingLeft: '8px',
};

const signatureSection = {
  marginTop: '32px',
};

const signature = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#1a1a1a',
  marginBottom: '4px',
};

const signatureTitle = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#666666',
  marginBottom: '24px',
};

const ps = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#666666',
  fontStyle: 'italic',
  marginTop: '24px',
};

export default BetaWelcome;
