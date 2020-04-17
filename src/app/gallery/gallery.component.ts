import { Component, OnInit } from '@angular/core';
import { GALLERY_ITEMS } from '@app/mock';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  showLitebox: boolean = false;
  currentImg;

  galleryItems = GALLERY_ITEMS;


  constructor() { }

  ngOnInit(): void {
  }


  toggleLitebox = () => this.showLitebox = !this.showLitebox;

  openLitebox(galleryItem) {
    this.currentImg = galleryItem;
    this.showLitebox = true
  }


}
