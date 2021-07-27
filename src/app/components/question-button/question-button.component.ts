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
    
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 100);
      var z = Math.floor(Math.random() * 80);
      
      var bckg = "hsl(" + x + "," + y + "% ," + (z + 20) + "%)";
      var shdw = "hsl(" + x + "," + y + "% ," + z + "%)";

    
    document.body.style.backgroundColor = `${bckg}`;

    const shadowdiv = document.getElementById('shadow-div');
    if (shadowdiv) shadowdiv.style.boxShadow = `7px 12px ${shdw}`;
  }
}
