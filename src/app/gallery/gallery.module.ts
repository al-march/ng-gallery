import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { LiteboxComponent } from './litebox/litebox.component';



@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    LiteboxComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    GalleryComponent,
    GalleryItemComponent,
    LiteboxComponent
  ]
})
export class GalleryModule { }
