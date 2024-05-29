import { LightningElement,api } from 'lwc';

export default class Lchooks1 extends LightningElement {
    // @api recordId;
    error;
    stack;
    constructor(){
        super(); // Call constructor of parent class ( LightningElement ) 
        console.log('Child constructor');
    }
    connectedCallback(){
      console.log('In child connected callback method');
    }
    renderedCallback(){
        console.log('In child rendered callback method');

    }
    disconnectedCallback(){
        console.log('In child disconnected callback method');
    }
    errorCallback(error,stack){
        console.log('Inside error callback');
        this.error = error;
        this.stack = stack;
    }

}