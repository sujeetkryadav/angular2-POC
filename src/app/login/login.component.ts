import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { LoginService } from '../service/login.service';
import {Router, ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  flag: boolean;
  login_res: boolean;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.createForm();
   }

   createForm() {
    this.loginForm = this.fb.group({
         email: [null, [Validators.required, Validators.email]],
       password: [null, Validators.required],
    });
   }

  ngOnInit() {
     this.flag = false;
     this.login_res = false;
  }
/**
 * TO DO : TO submit form
 */
  onSubmit() {
      this.loginService.getUsers().subscribe((data: any) => {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
        this.login_res = true;
        for (let i = 0; i < data.length; i++) {
             if (data[i].email === email && data[i].password === password) {
              this.flag = true;
              this.loginService.setUserDetail(data[i]);
              this.router.navigate(['/profile/' + data[i].id]);
             }
        }
      });
  }

}
