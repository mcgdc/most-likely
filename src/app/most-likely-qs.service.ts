import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class MostLikelyQsService {
  private questionsUrl: string = 'http://najbardziejprawdopodobny.pl/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getRandomQuestion(): Observable<Question>{
    return this.http.get<Question>('http://najbardziejprawdopodobny.pl/api/question/random/');
  }

  constructor(private http: HttpClient) { }
}