import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';


import { LoginService } from './service/login.service';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, ErrorComponent, ProfileComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,
    RouterModule.forRoot([{path: 'profile/:id', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path: '**', component: ErrorComponent}])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
