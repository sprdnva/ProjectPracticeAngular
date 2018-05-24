import { Guid } from 'guid-typescript';
import {CompletedTask} from '../CompletedTaskField/CompletedTask';
import {UserNotification} from '../UserNotificationField/UserNotification';

export class User {
  public Id: Guid;
  public Name: string;
  public Password: string;
  public Email: string ;
  public Info: string;
  public CompletedTasks: Array<CompletedTask>;
  public Notifications:  Array<UserNotification>;
  constructor(name: string, password: string, email: string) {
      this.Name = name;
      this.Password = password;
      this.Email = email;
  }
}
