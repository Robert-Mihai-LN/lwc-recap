import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext, publish } from 'lightning/messageService';
// Importing the custom message channel
import MyMessageChannel from '@salesforce/messageChannel/MyMessageChannel__c';

export default class PublisherComponent extends LightningElement {
    // create the message context 
    context = createMessageContext();
    @track input = '';

    // Handler for the input change event
    handleChange(e) {
        this.input = e.target.value;
    }

    // Handler for the button click event
    handleClick() {
        this.publishMC();
    }

    // Method to publish the message
    publishMC() {
        const message = {
            recordId: 'some record id',
            recordData: this.input ? this.input : 'no input'
        };
        // So publish will take in 3 params :
        // 1 - the context
        // 2 - the message channel reference (We use __c to import it )
        // 3 - the message (payload),the fields in here have to correspond to the fields in :
        // lightningmessagefields
        publish(this.context, MyMessageChannel, message);
    }

    disconnectedCallback() {
        // so clear the data in this message channel when component is no longer in the dom 
        releaseMessageContext(this.context);
    }
}
