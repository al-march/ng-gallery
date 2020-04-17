import { Injectable } from '@angular/core';
import { GalleryItem } from './gallery';

import { GALLERY_ITEMS } from '../mock';
import { ReplaySubject, Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  public gallerySubject: ReplaySubject<GalleryItem[]> = new ReplaySubject()

  gallery: GalleryItem[] = GALLERY_ITEMS;

  constructor() { }

  getGallery(): Observable<GalleryItem[]> {
    this.saveState();
    return this.gallerySubject
  }

  toggleLike(id) {
    const likedIndex = this.gallery.findIndex(item => item.id === id);
    this.gallery[likedIndex].isLiked = !this.gallery[likedIndex].isLiked;

    this.gallery[likedIndex].likes += this.gallery[likedIndex].isLiked ? 1 : -1;
    this.saveState()
  }

  saveState() {
    this.gallerySubject.next(this.gallery)
  }
}
