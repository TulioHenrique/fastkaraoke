import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationProvider {
  serverUrl = "https://fast-karaoke.herokuapp.com/";

  constructor(public http: HttpClient) {
    console.log('Hello ProvidersApplicationTsProvider Provider');
  }
  getMusicas() {
    return this.http.get<any>(`${this.serverUrl}/musica/`);
  }

  getPedidos() {
    return this.http.get<any>(`${this.serverUrl}/pedido/all`);
  }


}