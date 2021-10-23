import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-advanced',
  templateUrl: './progress-bar-advanced.component.html',
  styleUrls: ['./progress-bar-advanced.component.scss']
})
export class ProgressBarAdvancedComponent implements OnInit {

  @Input() progressValueAdvanced: number = 0;
  progressValue : number = 0;
  progressAdvancedText: String = "";
  
  constructor() { }

  ngOnInit(): void {
    this.startCountProgress();
  }

  startCountProgress(){
    if(this.progressValueAdvanced < 100){
      this.progressValue = this.progressValueAdvanced; 
      this.CountSecound();
    } 
  }

  CountSecound(){
    setTimeout(() => {
      this.progressValue = this.progressValue + 1;
      this.processCount();
    }, 1000);
  }

  processCount(){
    console.log("Count is: ", this.progressValue);
  
    if(this.progressValue == 100){
      this.progressAdvancedText = "Complete";
      console.log("Progress Complet!!")
    } else{
      this.CountSecound();
    }
  
  }


}
