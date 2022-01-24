import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(  public http: HttpClient
    ) { }

  getApiAcess(apiUrl, params: HttpParams): Observable<any> {
    const currDate = Date.now();
    const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.delete("Content-Type");
    const options = ({ headers: headers, params: params });
    return this.http.get(apiUrl , options); // removed current date for pwa
}
}
