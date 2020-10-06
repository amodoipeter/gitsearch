import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
// import {HttpClient} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
// import { HttpHeaderResponse } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
// import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpClient,
    // HttpHeaderResponse
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
