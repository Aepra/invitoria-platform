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
const WISHES_KEY = 'undangan_03_wishes';
const RSVP_KEY = 'undangan_03_rsvp';

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

const mockSupabaseBuilder = (table: string, op: 'select' | 'insert', payload?: any) => {
  let _limit = 50;
  const execute = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const storageKey = `mock_supabase_${table}`;
    const storeData = localStorage.getItem(storageKey);
    let data = storeData ? JSON.parse(storeData) : [];
    
    if (op === 'insert') {
      const newEntry = {
        ...payload,
        id: Date.now().toString(),
        created_at: new Date().toISOString()
      };
      data.unshift(newEntry);
      localStorage.setItem(storageKey, JSON.stringify(data));
      return { data: newEntry, error: null };
    }
    
    return { data: data.slice(0, _limit), error: null };
  };

  const builder = {
    select: () => builder,
    order: () => builder,
    limit: (n: number) => { _limit = n; return builder; },
    single: () => builder,
    then: (resolve: any, reject: any) => execute().then(resolve).catch(reject)
  };
  return builder;
};

export const supabase = {
  from: (table: string) => ({
    select: () => mockSupabaseBuilder(table, 'select'),
    insert: (entry: any) => mockSupabaseBuilder(table, 'insert', entry)
  })
} as any;
