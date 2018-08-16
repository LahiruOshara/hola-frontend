import { Component, OnInit } from '@angular/core';
import {MessagingService} from '../services/messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  message;

  constructor(private msg: MessagingService) { }

  ngOnInit() {
    console.log('tt');
    this.msg.getPermission();
    this.msg.receiveMessage();
    this.message = this.msg.currentMessage;
  }

}
