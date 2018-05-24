import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../UserField/User';
import {Guid} from 'guid-typescript';
import {LocalStorageService} from '../local-storage.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public FirstName: string;
  public SecondName: string;
  public ConfirmPassword: string;
  public Email: string;
  public Info: string;
  public editingUser;
  private allUsers;
  public OldPassword;

  constructor(private userService: UserService, private  localStore: LocalStorageService) {
  }

  ngOnInit() {
    /*this.userService.getItem(Guid.parse(`32301b75-a59e-4de5-b9e8-e142da9e893b`)).subscribe(x => {
      const user = x;
      this.editingUser = x;
    });*/
    /*(data: User) => this.editingUser = {*/
  }

  editUserInfo(): void {
    /*
     Id : data['Id'],
      Name: data['Name'],
      Info: data['Info'],
      Notifications: data['Notifications'],
      Email: data['Email'],
      CompletedTasks: data['CompletedTasks'],
      Password: data['Password']
    });*/
    /*
        this.userService.GetElements().subscribe(x => {
          const userData = x;
        });
    */
    /*
        this.userService.getItem(Guid.parse(`32301b75-a59e-4de5-b9e8-e142da9e893b`)).subscribe(x => {
          const user = x;
          this.editingUser = x;

          this.userService.updateItem(this.editingUser.id, this.editingUser).subscribe(x=>{
                console.log(x);
                }          );
        });
    */

    this.userService.getItem(Guid.parse(`32301b75-a59e-4de5-b9e8-e142da9e893b`)).toPromise()
      .then(x => {
        const user = x;
        return this.editingUser = x;
      })
      .then(x => this.userService.updateItem(this.editingUser.id, this.editingUser).toPromise())
      .then(x => {
        console.log(x);
      });
  }


//    this.userService.updateItem(this.editingUser.id, this.editingUser).subscribe();


  deleteUserInfo(): void {
    this.userService.deleteItem(Guid.parse('32301b75-a59e-4de5-b9e8-e142da9e893b')).subscribe();
  }
}
