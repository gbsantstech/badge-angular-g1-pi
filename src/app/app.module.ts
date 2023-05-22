import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BadgeHistoryComponent } from './badge-history/badge-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BadgeHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
