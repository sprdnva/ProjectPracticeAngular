import {Guid} from 'guid-typescript';
import {Course} from '../CourseField/Course';
import {CompanyNotification} from '../CompanyNotificationField/CompanyNotification';

export class Company {
public Id: Guid;
public  Name: string;
public  Password: string;
public  Contacts: string;
public  Info: string;
public  Courses:  Array<Course>;
public  Notifications:  Array<CompanyNotification>;
}
