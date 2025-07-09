import { promises as fs } from 'fs';
import { join } from 'path';
import type { Contact } from '../data/contact.js';

const STORAGE_DIR = join(process.cwd(), 'storage');
const CONTACTS_FILE = join(STORAGE_DIR, 'contacts.json');

export class FileStorage {
  private static async ensureStorageDir(): Promise<void> {
    try {
      await fs.access(STORAGE_DIR);
    } catch {
      await fs.mkdir(STORAGE_DIR, { recursive: true });
    }
  }

  static async loadContacts(): Promise<Contact[]> {
    try {
      await this.ensureStorageDir();
      const data = await fs.readFile(CONTACTS_FILE, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      // Fichier n'existe pas ou erreur de lecture, retourner tableau vide
      return [];
    }
  }

  static async saveContacts(contacts: Contact[]): Promise<void> {
    try {
      await this.ensureStorageDir();
      await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des contacts:', error);
      throw new Error('Impossible de sauvegarder les contacts');
    }
  }

  static async addContact(contact: Contact): Promise<void> {
    const contacts = await this.loadContacts();
    contacts.push(contact);
    await this.saveContacts(contacts);
  }
}
