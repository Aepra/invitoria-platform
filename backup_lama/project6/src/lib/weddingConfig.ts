export interface WeddingConfig {
  bride: {
    name: string;
    fullName: string;
    father: string;
    mother: string;
    photo: string;
  };
  groom: {
    name: string;
    fullName: string;
    father: string;
    mother: string;
    photo: string;
  };
  events: Array<{
    title: string;
    date: string;
    time: string;
    address: string;
    mapUrl: string;
  }>;
  giftAccounts: Array<{
    bank: string;
    number: string;
    holder: string;
  }>;
  giftAddress: string;
  gallery: string[];
  story: Array<{
    title: string;
    date: string;
    description: string;
  }>;
}

export const weddingConfig: WeddingConfig = {
  bride: {
    name: 'Ratna',
    fullName: 'Ratna Sari, S.Pd',
    father: 'Bapak H. Andi Mappanyompa',
    mother: 'Ibu Hj. Andi Tenri Abeng',
    photo: 'https://images.pexels.com/photos/36489036/pexels-photo-36489036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  groom: {
    name: 'Yogi',
    fullName: 'Yogi Pratama, S.E',
    father: 'Bapak H. Andi Syamsul Alam',
    mother: 'Ibu Hj. Andi Rosmiati',
    photo: 'https://images.pexels.com/photos/29194884/pexels-photo-29194884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  events: [
    {
      title: 'Akad Nikah',
      date: 'Sabtu, 18 April 2026',
      time: '08.00 WIB - Selesai',
      address:
        'Kediaman Mempelai Pria, Jl. Andi Pangeran Petta Rani No.14, Makassar, Sulawesi Selatan',
      mapUrl: 'https://maps.google.com/?q=Makassar+Sulawesi+Selatan',
    },
    {
      title: 'Resepsi',
      date: 'Sabtu, 18 April 2026',
      time: '13.00 WIB - Selesai',
      address:
        'Gedung Laminusa Ballroom, Jl. Sultan Alauddin No.73, Makassar, Sulawesi Selatan',
      mapUrl: 'https://maps.google.com/?q=Makassar+Sulawesi+Selatan',
    },
  ],
  giftAccounts: [
    { bank: 'Bank BRI', number: '1234 5678 901 234', holder: 'Ratna Sari' },
    { bank: 'Bank Mandiri', number: '9876 5432 109 876', holder: 'Yogi Pratama' },
  ],
  giftAddress:
    'Jl. Andi Pangeran Petta Rani No.14, Makassar, Sulawesi Selatan 90123',
  gallery: [
    'https://images.pexels.com/photos/36546798/pexels-photo-36546798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/36489037/pexels-photo-36489037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/36546799/pexels-photo-36546799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/36489043/pexels-photo-36489043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/35996590/pexels-photo-35996590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/34607761/pexels-photo-34607761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ],
  story: [
    {
      title: 'Pertemuan Pertama',
      date: 'Maret 2021',
      description:
        'Kami berkenalan pertama kali di sebuah acara budaya Bugis di Makassar. Pertemuan yang sederhana namun menjadi awal dari segalanya.',
    },
    {
      title: 'Jalan Tahun',
      date: '2021 - 2023',
      description:
        'Dua tahun berjalan bersama, saling mengenal, dan saling memahami budaya serta keluarga masing-masing. Banyak cerita manis dan tawa kami lalui.',
    },
    {
      title: 'Lamaran',
      date: 'Desember 2025',
      description:
        'Dengan restu kedua keluarga, Yogi melamar Ratna dalam adat Bugis yang penuh makna. Acara lamaran berlangsung khidmat dan hangat.',
    },
    {
      title: 'Hari Bahagia',
      date: 'April 2026',
      description:
        'Hari yang dinanti pun tiba. Kami akan mengikat janji suci di hadapan keluarga dan sahabat tercinta. Semoga menjadi keluarga sakinah, mawaddah, warahmah.',
    },
  ],
};
