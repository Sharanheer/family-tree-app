import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  userInfo:string;

    ngOnInit() {
      this.userInfo = "parent123";
    }
}
