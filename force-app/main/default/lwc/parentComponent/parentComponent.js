import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    greeting;
    userName;
    changeUsername(e){
     this.userName = e.target.value;
   }

   // when gets rendered  
   renderedCallback (){
      // just call the method inside child component

      const childComponent = this.template.querySelector('c-child-component');
      console.log(childComponent)
      if(childComponent){
       this.greeting = childComponent.greetUser('Fuck you');
      }
   }
}