import { LightningElement } from 'lwc';

export default class Lchooks2 extends LightningElement {
       // @api recordId;
       error;
       stack;
       constructor(){
           super(); // Call constructor of parent class ( LightningElement ) 
           console.log('Parent constructor');
       }
       connectedCallback(){
         console.log('In parent connected callback method');
       }
       renderedCallback(){
           console.log('In parent rendered callback method');
   
       }
       disconnectedCallback(){
           console.log('In parent disconnected callback method');
       }
       errorCallback(error,stack){
           console.log('Inside parent error callback');
           this.error = error;
           this.stack = stack;
       }
}