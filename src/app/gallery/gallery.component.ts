import { Component, OnInit } from '@angular/core';
import { GALLERY_ITEMS } from '@app/mock';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  items: number[] = [1, 1, 1, 1]

  galleryItems = GALLERY_ITEMS;

  constructor() { }

  ngOnInit(): void {

  }

}
