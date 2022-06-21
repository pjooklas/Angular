import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'VaikuStovykla';

  public user:User|null=null;

  constructor (private auth:AuthService){
    auth.autologin();
  }

  ngOnInit(): void {
    this.user=this.auth.user;
  }

}
