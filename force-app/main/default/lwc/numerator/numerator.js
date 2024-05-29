import { LightningElement,api } from 'lwc';

export default class Numerator extends LightningElement {
    // @api counter=0;
    _currentCount = 0;
    priorCount = 0;
    @api
    get counter() {
      return this._currentCount;
    }
    set counter(value) {
      this.priorCount = this._currentCount;
      this._currentCount = value;
    }
    // This maximizeCounter method is on the child component
    @api maximizeCounter(){
        this.counter+=1000000;
    }
}