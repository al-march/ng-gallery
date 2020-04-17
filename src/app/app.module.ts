import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { LiteboxComponent } from './gallery/litebox/litebox.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GalleryComponent,
    GalleryItemComponent,
    LiteboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
