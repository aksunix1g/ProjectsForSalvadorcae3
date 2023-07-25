import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }
  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'mon-entete-personnalise': 'maValeur'
    })
  };
  public getRooms(): Observable<any> {
    return this.http.get<any>('http://localhost:4040/places', this.optionRequete)
  }
  public deleteRoomById(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:4040/places/delete/'+id, this.optionRequete)
  }
}
