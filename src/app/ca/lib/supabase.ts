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

// Dummy data state replacing Supabase using localStorage (JSON)
const WISHES_KEY = 'undangan_wishes';
const RSVP_KEY = 'undangan_rsvp';

const getWishes = (): Wish[] => {
  const data = localStorage.getItem(WISHES_KEY);
  if (data) return JSON.parse(data);
  const defaultWishes = [
    {
      id: "1",
      name: "Tamu Undangan",
      message: "Selamat menempuh hidup baru!",
      created_at: new Date().toISOString()
    }
  ];
  localStorage.setItem(WISHES_KEY, JSON.stringify(defaultWishes));
  return defaultWishes;
};

const getRsvps = (): Rsvp[] => {
  const data = localStorage.getItem(RSVP_KEY);
  return data ? JSON.parse(data) : [];
};

export async function fetchWishes(): Promise<Wish[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return getWishes().sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export async function addWish(name: string, message: string): Promise<Wish> {
  await new Promise(resolve => setTimeout(resolve, 500));
  const wishes = getWishes();
  const newWish: Wish = {
    id: Date.now().toString(),
    name,
    message,
    created_at: new Date().toISOString()
  };
  wishes.push(newWish);
  localStorage.setItem(WISHES_KEY, JSON.stringify(wishes));
  return newWish;
}

export async function submitRsvp(
  name: string,
  attendance: 'hadir' | 'tidak',
  guestCount: number,
  message: string,
): Promise<Rsvp> {
  await new Promise(resolve => setTimeout(resolve, 500));
  const rsvps = getRsvps();
  const newRsvp: Rsvp = {
    id: Date.now().toString(),
    name,
    attendance,
    guest_count: guestCount,
    message: message || null,
    created_at: new Date().toISOString()
  };
  rsvps.push(newRsvp);
  localStorage.setItem(RSVP_KEY, JSON.stringify(rsvps));
  return newRsvp;
}
