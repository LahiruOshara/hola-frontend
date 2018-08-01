import { Component, OnInit } from '@angular/core';
import {GetVisitingCardsService} from '../services/get-visiting-cards.service';
import {VISITORS } from './visitors';

@Component({
  selector: 'app-visiting-card',
  templateUrl: './visiting-card.component.html',
  styleUrls: ['./visiting-card.component.css']
})
export class VisitingCardComponent implements OnInit {
  visitingcards = VISITORS;
  selVisitor: any;
  // query
  visitcard = document.querySelector('.loginbox');
  table = document.querySelector('#visitors');
  showItem = false;

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
    // console.log(this.visitingcards);
  }

  onSelect(visitor) {
   // console.log('clicked');
    this.selVisitor = visitor;
    // const loginBox = document.querySelector('.loginbox');
    // console.log(loginBox);
    // loginBox.classList.add('show');
  }


}
