import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models';
import { Routes } from '../http/Api';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private http: HttpClient) {}

  public setData(key: string, value: any): void {
    const stringifiedData = JSON.stringify(value);
    localStorage.setItem(key, stringifiedData);
  }
  public getData(key: string): any {
    const rawData = localStorage.getItem(key);
    if (rawData) {
      const data = JSON.parse(rawData);
      return data;
    }
  }
  public deletedData(key: string): void {
    localStorage.removeItem(key);
  }
}
