// src/data/index.ts
// Concentre l'export des jeux de données mockées (cardsData, galleryData, etc.).
// Exporte également les types (Card, GalleryItem) et un éventuel DataStore.
// Sert de « barrel file » pour simplifier et uniformiser les imports dans les routes et services.

import cardsRoutes from "../routes/cards.js";
import galleryRoutes from "../routes/gallery.js";
import type { Contact } from "./contact.js";
import { FileStorage } from "../utils/fileStorage.js";

export { cardsData, type Card } from "./cards.js";
export { galleryData, type GalleryItem } from "./gallery.js";
export { type Contact } from "./contact.js";

// Store central pour gérer l'état des données (optionnel)
export class DataStore {
  private cards = cardsRoutes;
  private gallery = galleryRoutes;

  getCards() {
    return this.cards;
  }

  getGallery() {
    return this.gallery;
  }

  async addContact(contact: Omit<Contact, 'id' | 'timestamp'>): Promise<Contact> {
    const newContact: Contact = {
      ...contact,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    
    await FileStorage.addContact(newContact);
    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return await FileStorage.loadContacts();
  }
}

export const dataStore = new DataStore();
