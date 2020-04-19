import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem } from '@app/gallery/gallery';
import { GalleryService } from '@app/gallery/gallery.service';
import { Subscription, ReplaySubject } from 'rxjs';
import { FilterService } from '@app/menu/filter.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})


export class GalleryComponent implements OnInit {

  public showLitebox: boolean = false;

  private subscription: Subscription;
  private filterSubscriber: Subscription;

  public galleryItems: GalleryItem[];
  public currentItem: GalleryItem;

  public filter: string = 'all';

  constructor(private service: GalleryService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.subscription = this.service.getGallery().subscribe(gallery => {
      this.galleryItems = gallery;
    });

    this.filterSubscriber = this.filterService.filterSubj.subscribe(filter => this.filter = filter)
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.filterSubscriber.unsubscribe();
  }

  isShowItem = (item: GalleryItem, filter) => filter === 'all' ? true : item.filters.includes(filter);

}
