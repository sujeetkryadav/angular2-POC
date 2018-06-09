import { Injectable  } from '@angular/core' ;
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { templateSourceUrl } from '@angular/compiler';

export class User {
   id: number;
   email: number;
   password: string;
   address: string;
}

@Injectable()
export class LoginService {
     userData: any;
    constructor(private http: Http) {
    }

  /**
   * TO Do: TO get user data for login verificaion
   * @param: N/A
   */
  getUsers(): Observable<User> {
      return this.http.get('./assets/users.json')
      .map(res => res.json());
  }

  /**
   * To Do : TO set user data after successfull loing
   * @param userData
   */
   setUserDetail(userData: any) {
    this.userData = userData;
   }

   /**
    * To Do : Getter function to return saved data
    */
   getUserData(): any {
     return this.userData;
   }
}
