-- ============================================================================
-- TopinTech (Green AI) — Complete Supabase Backend Schema
-- Run in Supabase SQL Editor (or via `supabase db push`) on a fresh project.
-- Consolidates existing migrations (20260125071722, 20260519125426) and adds
-- the missing audit_bookings table (the "Book Your Free AI Audit Call" form
-- currently only posts to n8n and is never persisted in Supabase).
-- Idempotent: safe to re-run.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Roles: app_role enum + user_roles table
--    Needed before contact_leads/audit_bookings policies since they call
--    has_role() for admin-only access.
-- ----------------------------------------------------------------------------
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- SECURITY DEFINER function avoids RLS recursion when checking roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;
CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ----------------------------------------------------------------------------
-- 2. contact_leads — Contact page form ("/contact")
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_leads;
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_leads
  FOR INSERT
  WITH CHECK (true);

-- Superseded broad "authenticated can view" policy from the first migration
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.contact_leads;

DROP POLICY IF EXISTS "Admins can view contact leads" ON public.contact_leads;
CREATE POLICY "Admins can view contact leads"
  ON public.contact_leads FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can update contact leads" ON public.contact_leads;
CREATE POLICY "Admins can update contact leads"
  ON public.contact_leads FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can delete contact leads" ON public.contact_leads;
CREATE POLICY "Admins can delete contact leads"
  ON public.contact_leads FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX IF NOT EXISTS idx_contact_leads_created_at ON public.contact_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_leads_email ON public.contact_leads (email);

-- ----------------------------------------------------------------------------
-- 3. audit_bookings — "Book Your Free AI Audit Call" form (AuditSection.tsx)
--    NEW TABLE: this form currently only fires a fetch() to the n8n webhook
--    and nothing is stored in Supabase, so there is no record if the webhook
--    fails. Same admin-only read/write pattern as contact_leads.
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.audit_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can submit a booking" ON public.audit_bookings;
CREATE POLICY "Anyone can submit a booking"
  ON public.audit_bookings
  FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can view bookings" ON public.audit_bookings;
CREATE POLICY "Admins can view bookings"
  ON public.audit_bookings FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can update bookings" ON public.audit_bookings;
CREATE POLICY "Admins can update bookings"
  ON public.audit_bookings FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can delete bookings" ON public.audit_bookings;
CREATE POLICY "Admins can delete bookings"
  ON public.audit_bookings FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX IF NOT EXISTS idx_audit_bookings_created_at ON public.audit_bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_bookings_preferred_date ON public.audit_bookings (preferred_date);

-- ----------------------------------------------------------------------------
-- 4. Bootstrap: promote your own account to admin
--    Run this AFTER you've signed up at least once through Supabase Auth
--    (e.g. via the dashboard's Authentication > Users, or your app's login).
--    Replace the email below.
-- ----------------------------------------------------------------------------
-- INSERT INTO public.user_roles (user_id, role)
-- SELECT id, 'admin' FROM auth.users WHERE email = 'you@example.com'
-- ON CONFLICT (user_id, role) DO NOTHING;
