import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Guid} from 'guid-typescript';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from './CompanyField/Company';

@Injectable()
export class CompanyService<T> {

  constructor(private http: HttpClient) {
  }

  GetElements(): Observable<T[]> {
    return this.http.get<T[]>('http://localhost:7505/api/company');
  }

  getCompany(id: Guid): Observable<Company> {
    return this.http.get<Company>
    (`http://localhost:7505/api/company/${id}`);
  }

  updateCompany(id: Guid, company: Company): Observable<any> {
    // const httpOptions = {
    // };
    return this.http.post(`http://localhost:7505/api/company/${id}`, company);
  }

  addCompany(company: Company): Observable<Company> {
    // const httpOptions = {
    //  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    return this.http.post<Company>('http://localhost:7505/api/company', company);
  }

  deleteCompany(id: Guid): Observable<any> {
    return this.http.delete<Company>(`http://localhost:7505/api/company/${id}`);
  }

}
