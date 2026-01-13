# Beta Signup Modal & Email System Design

## Overview

Build a modal-based beta signup flow that collects user information, stores it in Supabase, and sends a personalized welcome email via Resend.

---

## Components to Create

### 1. `components/BetaSignupModal.tsx`
Modal with signup form using shadcn components.

**Form fields:**
| Field | Type | Options |
|-------|------|---------|
| Name | Input | Required |
| Email | Input | Required, validated |
| Camera | Select | Sony, Canon, Mobile Phone, Other |
| Role | Select | Director, Cinematographer/DoP, Producer, Screen Writer, Camera Operator, Content Creator, Hobbyist, Videographer, Other |
| Experience | Select | Beginner, Intermediate, Professional |

**States:**
- Default: Form visible
- Loading: Button shows spinner
- Success: Animated checkmark + "You're on the list!"
- Error (duplicate): "You're already signed up!"

### 2. `context/ModalContext.tsx`
Global state for modal open/close.

```tsx
interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
```

### 3. `hooks/useBetaSignup.ts`
Form state, validation, and Supabase submission logic.

### 4. `lib/supabase.ts`
Supabase client initialization using environment variables.

---

## Files to Modify

| File | Change |
|------|--------|
| `App.tsx` | Wrap with `ModalProvider`, render `BetaSignupModal` |
| `components/Navbar.tsx` | "Join Beta" button calls `openModal()` |
| `components/Hero.tsx` | "Get Early Access" button calls `openModal()` |
| `components/CTA.tsx` | "Get Early Access" button calls `openModal()` |

---

## Dependencies to Add

```bash
# shadcn/ui (Dialog, Input, Select, Button, Label)
npx shadcn@latest init
npx shadcn@latest add dialog input select button label

# Supabase client
npm install @supabase/supabase-js

# React Email (for styled email templates)
npm install @react-email/components resend
```

---

## Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Supabase Setup

### Table: `beta_signups`

```sql
CREATE TABLE beta_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  camera TEXT NOT NULL,
  role TEXT NOT NULL,
  experience TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon users
CREATE POLICY "Allow public inserts" ON beta_signups
  FOR INSERT TO anon
  WITH CHECK (true);
```

---

## Modal UI Design

### Form State
```
┌─────────────────────────────────┐
│                            [X]  │
│                                 │
│  🎬 Join the Private Beta       │
│  Get early access to FrameCoach │
│                                 │
│  ┌─────────────────────────┐    │
│  │ Name                    │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ Email                   │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ Camera ▼                │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ Role ▼                  │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ Experience Level ▼      │    │
│  └─────────────────────────┘    │
│                                 │
│  [ Get Early Access →     ]     │
│                                 │
│  🔒 No spam. Unsubscribe anytime│
└─────────────────────────────────┘
```

### Success State
```
┌─────────────────────────────────┐
│                            [X]  │
│                                 │
│           ✓                     │
│    (animated checkmark)         │
│                                 │
│    You're on the list!          │
│                                 │
│    We'll send you an email      │
│    when it's your turn.         │
│                                 │
│    [ Close ]                    │
│                                 │
└─────────────────────────────────┘
```

---

## Styling Requirements

### shadcn Component Overrides

Map to brand colors in `index.css`:

- **Dialog overlay**: `bg-black/60 backdrop-blur-sm`
- **DialogContent**: Use existing `glass-card` class
- **Inputs/Selects**: `bg-shadow-light`, `border-white/10`, `text-white`, `focus:ring-scarlet`
- **Button**: `bg-scarlet hover:bg-scarlet-dark` with glow effect

### Brand Colors Reference

```css
--color-shadow: #211C21;
--color-shadow-light: #2A2428;
--color-scarlet: #DF2935;
--color-scarlet-dark: #B8232C;
--color-alabaster: #E6E8E6;
```

---

## Email System

### Supabase Edge Function

Triggered on new row insert to `beta_signups` table.

**Trigger setup:**
- Database webhook or Edge Function listening to `INSERT` on `beta_signups`
- Calls Resend API with personalized email

### React Email Template

Use `@react-email/components` for consistent typography:

```tsx
import { Html, Head, Body, Container, Heading, Text, Section, Button, Hr } from '@react-email/components';
```

**Subject:** "You're in."

**Personalization:**
- `[First Name]` → `name` field from signup

### Email Copy

```
Hey [First Name],

Thanks for signing up.

We got your request for beta access. You're on the list.

We're not building this for theoretical users or case studies. We're building it for people like you, people who actually work hard, deal with real constraints and are figuring it out on the ground.

---

## Access is coming soon

Watch your inbox.

We're rolling out in small waves over the upcoming days and weeks. When it's your turn, you'll get a link. No forms. No extra steps. Just access.

---

## What this actually is

This is early. Like, really early.

Some things will work better than you expect. Some things will be rough. Some features you might assume exist won't be there yet. That's the point of a beta.

But here's what you'll be able to do:

- Get camera-specific guidance for your shoots
- Turn your creative intent into actual settings
- See the logic behind every recommendation
- Help us figure out what matters and what doesn't

You're not testing a finished product. You're helping us build it.

Your feedback determines what this becomes when we actually launch.

---

## Why we're building this

Here's the truth: We built FrameCoach because we were tired of the bullshit.

Tired of wasting the first 30 minutes of a shoot day testing settings. Tired of editors emailing, "can you reshoot this? The angles don't match?" Tired of footage that looked perfect on set but broke in post. Tired of guessing when we should have been confident.

We wanted a tool that sits at the decision point. That knows your camera. That understands your constraints. That gives you a clear answer with a clear reason.

But we don't know if we're solving the actual problem yet.

That's where you come in.

---

## What we need from you

Brutal honesty.

When something doesn't work—tell us.
When something confuses you—tell us.
When you expect a feature that isn't there, tell us.
When a recommendation falls flat on a real shoot, tell us.

We can't fix what we don't know is broken.

---

## One last thing

We're building FrameCoach because filmmakers deserve better tools. Tools that respect your time. Tools that make you more confident without making you dependent. Tools that actually teach.

But we can't build that alone.

We need people willing to push this thing to its limits. People who'll tell us when it breaks. People who understand what actually matters when you're on set with the clock running.

You're one of those people.

Thank you for reaching out. We don't take that lightly.

We'll send your access link in the coming days or weeks. Until then, if you have any questions or want to share more about what you're working on, just reply to this email.

See you soon.

— [Founder Name]
Founder, FrameCoach

P.S. Keep an eye on your inbox. Your link is coming in the upcoming days and weeks. If you don't see it soon, reply to this email.
```

---

## Implementation Order

1. Install dependencies (shadcn, Supabase client)
2. Configure shadcn with brand colors
3. Create `lib/supabase.ts`
4. Create `context/ModalContext.tsx`
5. Create `hooks/useBetaSignup.ts`
6. Create `components/BetaSignupModal.tsx`
7. Update `App.tsx` to include modal provider and component
8. Update `Navbar.tsx`, `Hero.tsx`, `CTA.tsx` to trigger modal
9. Create Supabase table and RLS policy
10. Create React Email template
11. Set up Supabase Edge Function for email trigger
