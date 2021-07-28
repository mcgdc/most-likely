import { Component, OnInit } from '@angular/core';
import { MostLikelyQsService } from 'src/app/most-likely-qs.service';
import { Question } from 'src/app/question';
import { shuffle } from 'src/app/shuffle';


@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.css']
})
export class QuestionButtonComponent implements OnInit {
  currentQuestion?: Question;
  private questionIDs: Array<number> = new Array<number>();

  constructor(private mostLikelyQsService: MostLikelyQsService) { }

  ngOnInit(): void {
    this.mostLikelyQsService.getQuestionsAmount()
      .subscribe(n => {
        this.questionIDs = Array.from({length: n}, (_, i) => i + 1);
        shuffle(this.questionIDs);
        this.fetchNextQuestion();
      });
  }

  fetchNextQuestion(): void {
    const res = this.questionIDs.pop();
    if (res === undefined) {
      this.currentQuestion = {'Content': 'No questions left.'};
      return;
    }
    this.mostLikelyQsService.getQuestionById(res)
      .subscribe(q => this.currentQuestion = q);

    const x = Math.floor(Math.random() * 360);
    const y = Math.floor(Math.random() * 100);
    const z = Math.floor(Math.random() * 80);

    const bckg = `hsl(${x}, ${y}%, ${z + 20}%)`;
    const shdw = `hsl(${x}, ${y}%, ${z}%)`;

    document.body.style.backgroundColor = `${bckg}`;
    const shadowDiv = document.getElementById('shadow-div');
    if (shadowDiv) shadowDiv.style.boxShadow = `7px 12px ${shdw}`;
  }
}
