import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  constructor(private ProfileService: ProfileService) { 
    this.ProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile=profile;
    });
    this.ProfileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos =repos;
    });
  }

  findProfile(){
    this.ProfileService.updateProfile(this.username);
  }

  ngOnInit(): void {
  }

}
