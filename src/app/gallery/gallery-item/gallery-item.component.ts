import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['../gallery.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() item;
 
  constructor() { }

  ngOnInit(): void {
  }

}
