/*
# Create wedding guestbook & RSVP tables (single-tenant, no auth)

1. New Tables
- `rsvp`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the guest
  - `attendance` (text, not null) — 'hadir' or 'tidak'
  - `guest_count` (int, default 1) — number of attending guests
  - `message` (text) — optional personal message
  - `created_at` (timestamptz, default now())
- `wishes`
  - `id` (uuid, primary key)
  - `name` (text, not null) — name of the well-wisher
  - `message` (text, not null) — the wish / prayer / greeting
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated CRUD because the wedding invitation is intentionally public (no sign-in screen).
- SELECT is public so all visitors can read wishes/RSVPs; INSERT is public so guests can submit; UPDATE/DELETE left enabled for completeness but data is shared.
3. Notes
- No user_id / auth.users linkage — this is a public wedding invitation with no accounts.
- Indexes on created_at for efficient ordering of the guestbook feed.
*/

CREATE TABLE IF NOT EXISTS rsvp (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  attendance text NOT NULL CHECK (attendance IN ('hadir', 'tidak')),
  guest_count int NOT NULL DEFAULT 1,
  message text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS wishes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_rsvp_created_at ON rsvp (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_wishes_created_at ON wishes (created_at DESC);

ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishes ENABLE ROW LEVEL SECURITY;

-- RSVP policies (public, no-auth wedding invitation)
DROP POLICY IF EXISTS "anon_select_rsvp" ON rsvp;
CREATE POLICY "anon_select_rsvp" ON rsvp FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_rsvp" ON rsvp;
CREATE POLICY "anon_insert_rsvp" ON rsvp FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_rsvp" ON rsvp;
CREATE POLICY "anon_update_rsvp" ON rsvp FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_rsvp" ON rsvp;
CREATE POLICY "anon_delete_rsvp" ON rsvp FOR DELETE
  TO anon, authenticated USING (true);

-- Wishes policies (public guestbook)
DROP POLICY IF EXISTS "anon_select_wishes" ON wishes;
CREATE POLICY "anon_select_wishes" ON wishes FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_wishes" ON wishes;
CREATE POLICY "anon_insert_wishes" ON wishes FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_wishes" ON wishes;
CREATE POLICY "anon_update_wishes" ON wishes FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_wishes" ON wishes;
CREATE POLICY "anon_delete_wishes" ON wishes FOR DELETE
  TO anon, authenticated USING (true);