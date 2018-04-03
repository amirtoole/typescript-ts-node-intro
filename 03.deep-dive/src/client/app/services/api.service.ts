import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { port } from '../../../shared/constants';
import { HelloResponse } from '../../../shared/models';

@Injectable()
export class ApiService {

  readonly server_path = `http://localhost:${port}`;

  constructor(private http: HttpClient) {
  }

  hello(name: string): Observable<HelloResponse> {
    return this.http.get<HelloResponse>(`${this.server_path}/hello/${name}`);
  }

}
