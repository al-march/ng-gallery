import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { GalleryItem } from '@app/gallery/gallery';

import { faHeart, faArrowLeft, faArrowRight, faComments, faTimes } from "@fortawesome/free-solid-svg-icons";
import { GalleryService } from '@app/gallery/gallery.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ESC = 27,
}

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
  faTimes = faTimes;


  constructor(private service: GalleryService) { }

  ngOnInit(): void {
    
  }

  close (event) {
    const { target } = event;
    if (target.matches('.litebox')) {
      this.closeLitebox.emit();
    }
  }

  toggleLike = () => this.service.toggleLike(this.item.id);

  toggleComments = () => this.showComments = !this.showComments;

  showCommentsIcon = () => this.item.comments.length;

  next() {
    this.showComments = false;
    this.nextItem.emit()
  }

  prev() {
    this.showComments = false;
    this.prevItem.emit()
  }


  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    const { keyCode } = event;

    if (keyCode === KEY_CODE.RIGHT_ARROW) {
      this.next()
    }
    if (keyCode === KEY_CODE.LEFT_ARROW) {
      this.prev();
    }
    if (keyCode === KEY_CODE.ESC) {
      this.closeLitebox.emit();
    }
  }

}
