import { Component, Input, Output, OnInit, EventEmitter, OnDestroy, SimpleChanges, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit,OnDestroy, OnChanges {
  
  //valor inicial
  @Input() initial: number = 0;//null
  
  //contador
  public counter:number = 0;

  //diminuir 
  @Output() onDecrease : EventEmitter<number> = new EventEmitter<number>();
  
  //completo
  @Output() onComplete : EventEmitter<void> = new EventEmitter<void>();

  private countDownTimerReference: any = null;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Initial value updated: ${changes.initial.currentValue}`);
  }

  ngOnInit(): void {
    //this.startCountDown();
  }

  ngOnDestroy(): void {
    this.clearTimeOut();
  }

  startCountDown() {
    if(this.initial && this.initial > 0) {
       //Limpar o set Time out 
       this.clearTimeOut();
       this.counter = this.initial;
       this.doCountDown();
    }
  }

  doCountDown(){
  this.countDownTimerReference = setTimeout(() => {
      this.counter = this.counter -1;
      this.processCount();
    },1000);
  }

  private clearTimeOut(){
    if(this.countDownTimerReference){
      //Zera a instancia do setTimeOut
      //passada para o countDownTimerReference
      this.countDownTimerReference = null; 
    }
  }

  processCount(){
    
    //Emitindo o valor para o evento expor para fora do componente a informação
    this.onDecrease.emit(this.counter);
    
    console.log("Count is: ", this.counter);
  
    if(this.counter == 0){

      //Emitindo valor quando finalizado
      this.onComplete.emit();
      this.ngOnDestroy();
      
      console.log("Counter end!!")
    } else{
      this.doCountDown();
    }
  
  }


}
