import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private  username: string;
  private clientid = 'Iv1.2c7f97d2a9af5a15';
  private clientsecret = 'db5d9ff5932b00216facebbce52d0b5d4e3fd4e1';

  constructor(private http: HttpClient) {
    console.log("service is now ready");
    this.username = 'amodoipeter';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());

   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());

   }
   updateProfile(username:string){
    this.username = username;
   }
}
