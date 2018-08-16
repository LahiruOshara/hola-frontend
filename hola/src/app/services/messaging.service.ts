import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private authService:AuthService) {}

  private updateToken(token) {
    this.afAuth.authState.take(1).subscribe(user => {
      if (!user) {
        const _data = {
          ['test_admin'] : token
        };
        this.db.collection('fcmTokens').doc('test_admin').set(_data);
        return;
      }
      const data = {
        [user.uid] : token
      };
      this.db.collection('fcmTokens').doc(user.uid).set(data);
    });
  }

  getPermission() {
    this.messaging.usePublicVapidKey('BIPiJNfwV2ZifkT78-y48MytNEajaiuROz9M1jveHSNbwap_NZcxSri7j9LiD2WYTdp1VydzUc_ZyfbGvIBqlGU');
    this.authService.googleLogin().then(() => {
      this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission grandted');
        return this.messaging.getToken();
      })
      .then(token => {
        console.log(token);
        this.updateToken(token);
      }).catch((err) => {
        console.log('Unnable to get permission to notify', err);
      });
    });
  }

  receiveMessage() {
    this.messaging.onMessage((payload )=> {
      console.log('Message received', payload);
      this.currentMessage.next(payload);
    });
  }
}
