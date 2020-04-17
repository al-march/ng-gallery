import { Component, OnInit } from '@angular/core';
import { GALLERY_ITEMS } from '@app/mock';
import { GalleryItem } from '@app/gallery';
import { GalleryService } from '@app/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public showLitebox: boolean = false;

  public galleryItems: GalleryItem[];;
  public currentImg: GalleryItem;


  constructor(private service: GalleryService) { }

  ngOnInit(): void {
    this.service.getGallery().subscribe(gallery => {
      console.log(gallery);
      
      this.galleryItems = gallery
    })
  }

  public toggleLitebox = () => this.showLitebox = !this.showLitebox;

  public openLitebox(galleryItem) {
    this.currentImg = galleryItem;
    this.showLitebox = true;
  }

  public closeLitebox = () => this.showLitebox = false;


}
