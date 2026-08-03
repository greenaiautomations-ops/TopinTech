-- Create a table for contact form leads
CREATE TABLE public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (public form submissions)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_leads 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admins can view leads (for future admin panel)
CREATE POLICY "Authenticated users can view leads" 
ON public.contact_leads 
FOR SELECT 
USING (auth.role() = 'authenticated');