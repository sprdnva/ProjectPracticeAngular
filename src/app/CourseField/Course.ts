import DateTimeFormat = Intl.DateTimeFormat;
import {Task} from '../TaskField/Task';
import {Guid} from 'guid-typescript';

export class Course {
  public Id: Guid;
public  Name: string;
public  StartTime: DateTimeFormat;
public  EndTime: DateTimeFormat;
public  Vacancy: string;
public PeopleLimit: number;
public  Tasks: Array<Task>;
}
