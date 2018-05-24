import {Component, OnInit} from '@angular/core';
import {User} from '../UserField/User';
import {UserService} from '../user.service';
import {LocalStorageService} from '../local-storage.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public FirstName: string;
  public SecondName: string;
  public Password: string;
  public Email: string;
  public Updates;

  constructor(private userService: UserService, private  localStorageId: LocalStorageService) {
  }

  ngOnInit() {
  }

  registerUser(): void {
    const user: User = new User(this.FirstName + ' ' + this.SecondName, this.Password, this.Email);
    this.userService.addItem(user).subscribe(x => {
      console.log(x);
      this.localStorageId.setLocalStorage(x['id']);
    });
  }
}
