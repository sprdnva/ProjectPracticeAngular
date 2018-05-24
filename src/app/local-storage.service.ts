import { Injectable } from '@angular/core';
import {Guid} from 'guid-typescript';

@Injectable()
export class LocalStorageService {

  constructor() { }
  public getEmail(): string {
    const localStorageItem = JSON.parse(localStorage.getItem('email'));
    return localStorageItem == null ? [] : localStorageItem.email;
  }
  public setLocalStorage(email: string): void {
    localStorage.clear();
    localStorage.setItem('email', email);
  }

}
