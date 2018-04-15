import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import {Club} from './club.model';

@Injectable()
export class ClubService {

  selectedClub : Club; 
  clubsList : Club[];

  constructor(private http : Http ) { }

  postClub(club:Club){
     var body = JSON.stringify(club);
    var headerOpt = new Headers({'Content-Type':'application/json'});
    var requestOpt = new RequestOptions({method :RequestMethod.Post, headers: headerOpt});

    return this.http.post('http://localhost:51055/api/clubs', body, requestOpt).map(x=>x.json()); 
  }

  putClub(id, club){
    var body = JSON.stringify(club);
   var headerOpt = new Headers({'Content-Type':'application/json'});
   var requestOpt = new RequestOptions({method :RequestMethod.Put, headers: headerOpt});
 
   return this.http.put('http://localhost:51055/api/clubs/'+ id, body, requestOpt).map(x=>x.json()); 
 }

  getClubsList(){
    this.http.get('http://localhost:51055/api/clubs')
    .map((data: Response) => {
      return data.json() as Club[];
    }).toPromise().then(x=>{
      this.clubsList=x;
    })
  }

  deleteClub(id: number){
    return this.http.delete('http://localhost:51055/api/clubs/' + id).map(res => res.json());
  }

}
