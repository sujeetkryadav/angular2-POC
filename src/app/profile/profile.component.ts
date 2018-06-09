import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';


class User {
  name: string;
  dob: string;
  Phone: number;
  address: any;
  email: string;
  gender: string;
  dep: string;
  password: string;
  id: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetail: User;
  address: any;
  constructor(private activeRouter: ActivatedRoute, private loginServiuce: LoginService, private router: Router) {
   }

  ngOnInit() {
    typeof this.loginServiuce.getUserData() === 'undefined' ? this.getUser() : this.userDetail = this.loginServiuce.getUserData();
    typeof this.loginServiuce.getUserData() === 'undefined' ? this.address = {} : this.address = this.userDetail.address;
  }

   getUser(): void {
       this.loginServiuce.getUsers().subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id == this.activeRouter.snapshot.params['id']) {
            this.userDetail = data[i];
            this.address = data[i].address;
         }
     }
       });
   }

}
