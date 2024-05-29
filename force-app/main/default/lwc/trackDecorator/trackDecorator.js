import { LightningElement,track } from 'lwc';

export default class TrackDecorator extends LightningElement {
    counter = 0;
    example1CounterClickHandler(){
        // example1 will just increase the counter normally ,counter is  tracked ,it's not a reference ,it's a primitive
        this.counter+=1;
    }
    // Increasing the counter by using reference 
    example2Obj = {counter:0}
    example2CounterClickHandler(event){
      // Here we're basically making a new object and pointing to it.We're updating the value in the new object
      // This assignment to a new object will in turn trigger a re-rendering 
      this.example2Obj = {counter : this.example2Obj.counter+1}
    }


    example3Obj = {counter:0}
    example3CounterClickHandler(event){
    // simply updating the value of property 
    this.example3Obj.counter+=1;
    }
    @track example4Obj = {counter:0}
    example4CounterClickHandler(event){
     this.example4Obj.counter +=1;
    }
}