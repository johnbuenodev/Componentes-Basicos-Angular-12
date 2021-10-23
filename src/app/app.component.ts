import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularbasico';

  counterProgress: number = 0;
  totalCountdown: number = 10;

  constructor(){}

  updateProgress($event: any){
   this.counterProgress = (this.totalCountdown - $event)/this.totalCountdown * 100;
  }

  countdownFinished(){
    console.log("Countdown has finished!");
  }


}

