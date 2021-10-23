import { Component, Input, Output, OnInit, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  
  //valor inicial
  @Input() initial: number = 0;//null
  
  //contador
  public counter:number = 0;

  //diminuir 
  @Output() onDecrease : EventEmitter<number> = new EventEmitter<number>();
  
  //completo
  @Output() onComplete : EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
    this.startCountDown();
  }

  startCountDown() {
    if(this.initial && this.initial > 0) {
       this.counter = this.initial;
       this.doCountDown();
    }
  }

  doCountDown(){
    setTimeout(() => {
      this.counter = this.counter -1;
      this.processCount();
    },1000);
  }

  processCount(){
    
    //Emitindo o valor para o evento expor para fora do componente a informação
    this.onDecrease.emit(this.counter);
    
    console.log("Count is: ", this.counter);
  
    if(this.counter == 0){

      //Emitindo valor quando finalizado
      this.onComplete.emit();
      
      console.log("Counter end!!")
    } else{
      this.doCountDown();
    }
  
  }


}
