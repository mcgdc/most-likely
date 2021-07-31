import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class MostLikelyQsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getRandomQuestion(): Observable<Question>{
    return this.http.get<Question>('http://najbardziejprawdopodobny.pl/api/question/random/');
  }

  getQuestionById(id: number): Observable<Question>{
    return this.http.get<Question>(`http://najbardziejprawdopodobny.pl/api/question/${id}/`);
  }

  getQuestionsAmount(): Observable<number> {
    return this.http.get<number>('http://najbardziejprawdopodobny.pl/api/question/amount/');
  }

  constructor(private http: HttpClient) { }
}