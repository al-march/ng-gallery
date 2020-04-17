import { Component, OnInit } from '@angular/core';
import { GALLERY_ITEMS } from '@app/mock';
import { GalleryItem } from '@app/gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  showLitebox: boolean = false;

  galleryItems: GalleryItem[] = GALLERY_ITEMS;
  currentImg: GalleryItem;


  constructor() { }

  ngOnInit(): void {
  }

  toggleLitebox = () => this.showLitebox = !this.showLitebox;

  openLitebox(galleryItem) {
    this.currentImg = galleryItem;
    this.showLitebox = true;
  }

  closeLitebox = () => this.showLitebox = false;


}
