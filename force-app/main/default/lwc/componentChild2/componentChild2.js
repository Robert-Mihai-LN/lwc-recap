import { LightningElement } from 'lwc';

export default class ComponentChild2 extends LightningElement {
    inputValue;
    // basically this input handler will be used to pass data up from the child to parent 
    inputHandler(e){
      this.inputValue = e.target.value;
      const  evt  = new CustomEvent("search",{detail:this.inputValue});
      this.dispatchEvent(evt); // dispatch the event to parent,so basically this will be used on parent component
    }
     count = 0;

    handleClick(){
        // Dispatch a custom clickchanged event that can be used on parent,whenever the button gets clicked
        this.count++;
        const eventToDispatch = new CustomEvent('clickchanged',{detail:{message:'This was clicked '+ this.count + 'times!'}});
        this.dispatchEvent(eventToDispatch);
    }
}