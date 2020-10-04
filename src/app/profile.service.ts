import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private  username: string;
  private clientid = '';
  private clientsecret = '';

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
