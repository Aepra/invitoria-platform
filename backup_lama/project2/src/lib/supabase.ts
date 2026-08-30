import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Wish = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export type Rsvp = {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak';
  guest_count: number;
  message: string | null;
  created_at: string;
};

export async function fetchWishes(): Promise<Wish[]> {
  const { data, error } = await supabase
    .from('wishes')
    .select('id, name, message, created_at')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function addWish(name: string, message: string): Promise<Wish> {
  const { data, error } = await supabase
    .from('wishes')
    .insert({ name, message })
    .select('id, name, message, created_at')
    .single();
  if (error) throw error;
  return data;
}

export async function submitRsvp(
  name: string,
  attendance: 'hadir' | 'tidak',
  guestCount: number,
  message: string,
): Promise<Rsvp> {
  const { data, error } = await supabase
    .from('rsvp')
    .insert({ name, attendance, guest_count: guestCount, message: message || null })
    .select('id, name, attendance, guest_count, message, created_at')
    .single();
  if (error) throw error;
  return data;
}
