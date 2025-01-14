import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formular } from '../shared/formular';
import { API } from '../shared/api';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:HttpClient) { }

  postFormular(formular: Formular): Observable<Formular> {
    return this.http.post<Formular>( API, formular)}
}
