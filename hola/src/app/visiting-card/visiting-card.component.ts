import { Component, OnInit } from '@angular/core';
import {GetVisitingCardsService} from '../services/get-visiting-cards.service';

@Component({
  selector: 'app-visiting-card',
  templateUrl: './visiting-card.component.html',
  styleUrls: ['./visiting-card.component.css']
})
export class VisitingCardComponent implements OnInit {
  visitingcards: any;
  constructor(private visit: GetVisitingCardsService) { }

  ngOnInit() {
    // remove the comment of the code
   /* this.visit.getInfo().subscribe(data => {
      this.visitingcards = data;
      console.log(data);
    }, error => {
        console.log(error);
        return false;
    });*/
  }

}
