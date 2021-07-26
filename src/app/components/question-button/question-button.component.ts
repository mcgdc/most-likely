import { Component, OnInit } from '@angular/core';
import { MostLikelyQsService } from 'src/app/most-likely-qs.service';
import { Question } from 'src/app/question';


@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.css']
})
export class QuestionButtonComponent implements OnInit {
  currentQuestion?: Question;

  constructor(private mostLikelyQsService: MostLikelyQsService) { }

  ngOnInit(): void {
    this.fetchNextQuestion();
  }

  fetchNextQuestion(): void{
    this.mostLikelyQsService.getRandomQuestion()
    .subscribe(q => this.currentQuestion = q);
  }
}
