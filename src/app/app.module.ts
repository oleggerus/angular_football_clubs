import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router'
import{MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubComponent } from './clubs/club/club.component';
import { ClubsListComponent } from './clubs/clubs-list/clubs-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutComponent } from './OtherComponents/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    ClubComponent,
    ClubsListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component:ClubsComponent},
      {path: 'clubs', component:ClubsComponent},
      {path:'about', component:AboutComponent}
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
