import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GalleryItem } from '@app/gallery/gallery';

import { faHeart, faArrowLeft, faArrowRight, faComments } from "@fortawesome/free-solid-svg-icons";
import { GalleryService } from '@app/gallery/gallery.service';

@Component({
  selector: 'app-litebox',
  templateUrl: './litebox.component.html',
  styleUrls: ['./litebox.component.scss']
})
export class LiteboxComponent implements OnInit {

  @Input() item: GalleryItem;
  @Output() closeLitebox = new EventEmitter;
  @Output() nextItem = new EventEmitter;
  @Output() prevItem = new EventEmitter;

  showComments = false;

  faHeart = faHeart;
  faComments = faComments;
  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;

  constructor(private service: GalleryService) { }

  ngOnInit(): void {
    console.log(this.item);
    
  }

  close (event) {
    const { target } = event;
    if (target.matches('.litebox')) {
      this.closeLitebox.emit();
    }
  }

  toggleLike = () => this.service.toggleLike(this.item.id);

  showCommentsIcon = () => this.item.comments.length;

}
