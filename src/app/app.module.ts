import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubComponent } from './clubs/club/club.component';
import { ClubsListComponent } from './clubs/clubs-list/clubs-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    ClubComponent,
    ClubsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
