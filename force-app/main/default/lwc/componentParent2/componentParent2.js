import { LightningElement,track } from 'lwc';

export default class ComponentParent2 extends LightningElement {
    inputFromChild;
    @track clickedTimes;
    searchMethod(e){
       this.inputFromChild = e.detail.inputValue;
    }
    displayClickedTimes(e){
       this.clickedTimes = e.detail.message;
    }
}