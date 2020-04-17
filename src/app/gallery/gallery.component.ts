import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '@app/gallery/gallery';
import { GalleryService } from '@app/gallery/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public showLitebox: boolean = false;

  public galleryItems: GalleryItem[];;
  public currentItem: GalleryItem;


  constructor(private service: GalleryService) { }

  ngOnInit(): void {
    this.service.getGallery().subscribe(gallery => this.galleryItems = gallery)
  }

  public toggleLitebox = () => this.showLitebox = !this.showLitebox;

  public openLitebox(galleryItem) {
    this.currentItem = galleryItem;
    this.showLitebox = true;
  }

  public closeLitebox = () => this.showLitebox = false;

  showNextItem() {
    const { length } = this.galleryItems;
    const currentIndex = this.galleryItems.findIndex(item => item.id === this.currentItem.id);
    this.currentItem = (currentIndex === length - 1)
      ? this.galleryItems[0]
      : this.galleryItems[currentIndex + 1]
  }

  showPrevItem() {
    const { length } = this.galleryItems;
    const currentIndex = this.galleryItems.findIndex(item => item.id === this.currentItem.id);
    this.currentItem = (currentIndex === 0)
      ? this.galleryItems[length - 1]
      : this.galleryItems[currentIndex - 1]
  }

}
