/*
# Create wedding RSVP and wishes tables (single-tenant, no auth)

1. New Tables
- `rsvp` — stores guest attendance confirmations
  - id (uuid, primary key)
  - name (text, not null) — guest name
  - attendance (text, not null) — "hadir" or "tidak_hadir"
  - guest_count (int, default 1) — number of people attending
  - message (text, nullable) — optional message from guest
  - created_at (timestamptz)
- `wishes` — stores guest wishes/prayers for the couple
  - id (uuid, primary key)
  - name (text, not null) — guest name
  - message (text, not null) — wish/prayer message
  - created_at (timestamptz)

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated CRUD because the data is intentionally public/shared (no sign-in screen).
*/

CREATE TABLE IF NOT EXISTS rsvp (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  attendance text NOT NULL DEFAULT 'hadir',
  guest_count int NOT NULL DEFAULT 1,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;

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

CREATE TABLE IF NOT EXISTS wishes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE wishes ENABLE ROW LEVEL SECURITY;

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
