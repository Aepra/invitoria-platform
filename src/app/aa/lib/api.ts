import { supabase } from '../lib/supabase';

export interface RsvpEntry {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir';
  guest_count: number;
  message: string | null;
  created_at: string;
}

export interface WishEntry {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export async function fetchWishes(): Promise<WishEntry[]> {
  const { data, error } = await supabase
    .from('wishes')
    .select('id, name, message, created_at')
    .order('created_at', { ascending: false })
    .limit(100);
  if (error) throw error;
  return (data as WishEntry[]) ?? [];
}

export async function submitWish(name: string, message: string): Promise<WishEntry> {
  const { data, error } = await supabase
    .from('wishes')
    .insert({ name, message })
    .select('id, name, message, created_at')
    .single();
  if (error) throw error;
  return data as WishEntry;
}

export async function fetchRsvp(): Promise<RsvpEntry[]> {
  const { data, error } = await supabase
    .from('rsvp')
    .select('id, name, attendance, guest_count, message, created_at')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data as RsvpEntry[]) ?? [];
}

export async function submitRsvp(
  name: string,
  attendance: 'hadir' | 'tidak_hadir',
  guestCount: number,
  message: string
): Promise<RsvpEntry> {
  const { data, error } = await supabase
    .from('rsvp')
    .insert({ name, attendance, guest_count: guestCount, message: message || null })
    .select('id, name, attendance, guest_count, message, created_at')
    .single();
  if (error) throw error;
  return data as RsvpEntry;
}
