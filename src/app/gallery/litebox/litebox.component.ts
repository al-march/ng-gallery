import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GalleryItem } from '@app/gallery';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { GalleryService } from '@app/gallery.service';

@Component({
  selector: 'app-litebox',
  templateUrl: './litebox.component.html',
  styleUrls: ['./litebox.component.scss']
})
export class LiteboxComponent implements OnInit {

  @Input() item: GalleryItem;
  @Output() closeLitebox = new EventEmitter;

  showComments = false;

  faHeart = faHeart;

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

  toggleLike() {
    this.service.toggleLike(this.item.id)
  }

}
