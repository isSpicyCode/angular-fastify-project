// backend/src/data/contact.ts
export interface Contact {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  message: string;
  timestamp: string;
}

export const contacts: Contact[] = [
  {
    id: 1,
    nom: 'Dupont',
    prenom: 'Jean',
    email: 'jean.dupont@example.com',
    message: 'Bonjour, je souhaite en savoir plus sur vos services.',
    timestamp: new Date().toISOString()
  },
  {
    id: 2,
    nom: 'Martin',
    prenom: 'Claire',
    email: 'claire.martin@example.com',
    message: 'Pouvez-vous me rappeler demain ?',
    timestamp: new Date().toISOString()
  }
];
