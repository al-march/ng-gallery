import { Component, OnInit } from '@angular/core';
import { GalleryService } from '@app/gallery/gallery.service';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  filter: string = 'all';

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  changeFilter(filter) {
    this.filter = filter;
    this.filterService.filterSubj.next(filter);
  }



}
