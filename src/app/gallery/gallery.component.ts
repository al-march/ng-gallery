import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  items: number[] = [1, 1, 1, 1]

  constructor() { }

  ngOnInit(): void {

  }

}
