import { cardsData, type Card } from '../data/cards.js';

export function getAllCards(): Card[] {
    return cardsData;
}

export function getCardById(id: number): Card | undefined {
    return cardsData.find(card => card.id === id);
}