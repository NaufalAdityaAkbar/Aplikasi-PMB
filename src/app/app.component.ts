import { Component } from '@angular/core';
import{ StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private statusBar: StatusBar,
    private platform: Platform,
    public router:Router
  ) {
    this.initializeApp();
  }


initializeApp(){
  this.platform.ready().then(()=>{
  this.statusBar.styleDefault();
  this.router.navigateByUrl('splash');
    });
  };
};