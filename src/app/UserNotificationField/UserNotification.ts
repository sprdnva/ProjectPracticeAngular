import DateTimeFormat = Intl.DateTimeFormat;
import {User} from '../UserField/User';
import { Guid } from 'guid-typescript';

export class UserNotification {
  public Id: Guid;
  public   Users: Array<User>;
public  DateTime: DateTimeFormat;
public  Info: String;
}
