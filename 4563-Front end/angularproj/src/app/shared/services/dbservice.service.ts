import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  baseUrl:string="http://localhost:8888";

  constructor(public httpObj:HttpClient) { }

  getRecord(tableName:any){
    return this.httpObj.get(`${this.baseUrl}/${tableName}`);
  }
  deleteRecord(tableName:any,id:any){
    return this.httpObj.delete(`${this.baseUrl}/${tableName}/${id}`);
  }
}
