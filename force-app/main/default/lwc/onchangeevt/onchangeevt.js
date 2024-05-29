import { LightningElement } from 'lwc';

export default class Onchangeevt extends LightningElement {
    myValue = '';
    handleChange(e){
        // change the value of myValue to the changed value ,remember myValue is used 
        this.myValue = e.target.myValue
    }
}