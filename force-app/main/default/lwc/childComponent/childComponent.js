import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api userName;

    @api greetUser(greetingMessage){
        if(this.userName){
        return greetingMessage + " " + this.userName;
    }}
}