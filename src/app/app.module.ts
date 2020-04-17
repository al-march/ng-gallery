import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GalleryComponent,
    GalleryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
