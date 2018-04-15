import { Component, OnInit } from '@angular/core';

import {ClubService} from  '../share/club.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  constructor(private clubService:ClubService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.reset();
      
    this.clubService.selectedClub = {
      ClubId:null,
      Name:'',
      Year:null,
      Owner:'',
      City:'',
      Country:''      
    }
  
  }

  onSubmit(form: NgForm){
    if(form.value.ClubId == null){
    this.clubService.postClub(form.value)
    .subscribe(data=>{
      this.resetForm(form);
      this.clubService.getClubsList();
    })
    }
    else{
      this.clubService.putClub(form.value.ClubId, form.value)
    .subscribe(data=>{
      this.resetForm(form);
      this.clubService.getClubsList();
    });
    }
  }

}
