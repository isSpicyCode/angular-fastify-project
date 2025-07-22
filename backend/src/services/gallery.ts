import { galleryData, GalleryItem } from "../data/gallery.js";


export function getAllGalleryItems(): GalleryItem[] {
    return galleryData;
}

export function getGalleryById(id: number): GalleryItem | undefined {
    return galleryData.find(gallery => gallery.id === id);
}