interface SocialNetworks {
  id: number;
  title: string;
  url: string;
}

export interface ContactsData {
  id: number;
  titles: {
    phoneTitle: string;
    emailTitle: string;
    socialNetworksTitle: string;
  };
  phones: { id: number; number: string }[];
  email: string;
  socialNetworks: SocialNetworks[];
}

export const contactsData: ContactsData = {
  id: 1,
  titles: {
    phoneTitle: 'Phone number',
    emailTitle: 'Email',
    socialNetworksTitle: 'Follow us',
  },

  phones: [
    { id: 1, number: '+38 (098) 12 34 567' },
    { id: 2, number: '+38 (073) 12 34 567' },
  ],
  email: 'support@carptravel.com',
  socialNetworks: [
    { id: 1, title: 'facebook', url: 'https://www.facebook.com/' },
    { id: 2, title: 'instagram', url: 'https://www.instagram.com/' },
    { id: 3, title: 'youtube', url: 'https://www.youtube.com/' },
    { id: 4, title: 'tiktok', url: 'https://www.tiktok.com/' },
  ],
};
