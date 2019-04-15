import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl:string = "http://loclahost:5000/api/";
  constructor(private http:HttpClient) { }
  getData(route:string) {
    return this.http.get(this.baseUrl+route);
  }
}
