import { Component, OnInit } from '@angular/core';
import {ClubService} from './share/club.service'

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
  providers:[ClubService]

})
export class ClubsComponent implements OnInit {

  constructor(private clubService : ClubService) { }

  ngOnInit() {
  }

}
