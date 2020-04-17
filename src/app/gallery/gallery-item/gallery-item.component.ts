import { Component, OnInit, Input } from '@angular/core';
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['../gallery.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() item;
 
  faHeart = faHeart;
  faComments = faComments;

  constructor() { }

  ngOnInit(): void {
  }

  showComments = () => this.item.comments.length;

}
