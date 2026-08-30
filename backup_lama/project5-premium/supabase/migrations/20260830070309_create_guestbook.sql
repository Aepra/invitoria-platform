/*
# Create guestbook table for wedding invitation

1. New Tables
- `guestbook`
- `id` (uuid, primary key)
- `name` (text, not null) — guest's name
- `message` (text, not null) — guest's wish/message
- `attendance` (text, not null) — attendance status: 'hadir', 'ragu', 'tidak'
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `guestbook`.
- Allow anon + authenticated CRUD because this is a public wedding invitation (no sign-in).
- All data is intentionally shared/public so guests can read and post wishes.
*/

CREATE TABLE IF NOT EXISTS guestbook (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  message text NOT NULL,
  attendance text NOT NULL DEFAULT 'hadir',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_guestbook" ON guestbook;
CREATE POLICY "anon_select_guestbook" ON guestbook FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_guestbook" ON guestbook;
CREATE POLICY "anon_insert_guestbook" ON guestbook FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_guestbook" ON guestbook;
CREATE POLICY "anon_delete_guestbook" ON guestbook FOR DELETE
  TO anon, authenticated USING (true);
