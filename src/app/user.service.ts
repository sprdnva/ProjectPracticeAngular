import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Guid} from 'guid-typescript';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './UserField/User';
import {Url} from 'url';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  GetElements(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:7505/api/user');
  }

  getItem(id: Guid): Observable<User> {
    return this.http.get<User>
    (`http://localhost:7505/api/user/${id}`);
  }

  updateItem(id: Guid, item: User): Observable<any> {
    // const httpOptions = {
    // };
    return this.http.post(`http://localhost:7505/api/user/${id}`, item);
  }

  addItem(item: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<User>(`http://localhost:7505/api/user`, item, httpOptions);
  }

  deleteItem(id: Guid): Observable<any> {
    return this.http.delete<User>(`http://localhost:7505/api/user/${id}`);
  }

}
