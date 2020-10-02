import { Component, OnInit } from '@angular/core';
import { profile } from 'console';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ProfileService: ProfileService) { 
    this.ProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
    });
  }

  ngOnInit(): void {
  }

}
