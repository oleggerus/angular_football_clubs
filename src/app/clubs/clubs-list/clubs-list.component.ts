import { Component, OnInit } from '@angular/core';

import{ClubService} from '../share/club.service';
import{Club} from '../share/club.model';

@Component({
  selector: 'app-clubs-list',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})
export class ClubsListComponent implements OnInit {

  constructor(private clubService : ClubService) { }

  ngOnInit() {
    this.clubService.getClubsList();
  }

  showForEdit(club:Club){
    this.clubService.selectedClub=Object.assign({}, club);
  }

  onDelete(id:number){
    if(confirm('Are you sure')==true){
      this.clubService.deleteClub(id).subscribe(x=>{this.clubService.getClubsList()});
    }
    
  }

}
