-- Create the beta_signups table for storing beta access requests
CREATE TABLE beta_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  camera TEXT NOT NULL,
  role TEXT NOT NULL,
  experience TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anonymous users (public beta signup form)
CREATE POLICY "Allow public inserts" ON beta_signups
  FOR INSERT TO anon
  WITH CHECK (true);
