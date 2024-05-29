import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    handleStartChange(e){
        this.startCounter = parseInt(e.target.value);
    }

    handleMaximizeCounter() {
      // basically through this we call the function  handleMaximizeCounter inside numerator component.
      this.template.querySelector('c-numerator').handleMaximizeCounter();
    }
}