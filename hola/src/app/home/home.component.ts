import { Component, OnInit } from '@angular/core';
import {MessagingService} from '../../messaging.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private msg: MessagingService) { }
  message;
  ngOnInit() {
    this.msg.getPermission();
    this.msg.receiveMessage();
    this.message = this.msg.currentMessage;
  }

}
