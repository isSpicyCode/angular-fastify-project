import { dataStore } from '../data/index.js';
import type { Contact } from '../data/contact.js';

export async function handleContact(payload: Omit<Contact,'id'|'timestamp'>): Promise<Contact> {
  // ici tu peux valider plus finement, envoyer un e-mail, etc.
  return dataStore.addContact(payload);
}
