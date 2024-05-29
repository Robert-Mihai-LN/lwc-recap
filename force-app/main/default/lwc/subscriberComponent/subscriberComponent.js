import { LightningElement, track,wire } from 'lwc';
import { APPLICATION_SCOPE, createMessageContext,MessageContext, releaseMessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import MyMessageChannel from '@salesforce/messageChannel/MyMessageChannel__c';

export default class SubscriberComponent extends LightningElement {
    // creating a context (this will provide info about the component that's using LMS (lightning message channel))
     context = createMessageContext();
    // @wire(MessageContext) context;
    
    subscription = null;
    @track receivedMessage = '';

    handleMessage(message) {
        
        console.log('The received message is ' + JSON.stringify(message));
        this.receivedMessage = message.recordData;
        console.log(JSON.parse(this.receivedMessage).recordData)
        console.log('The final message is: ' + JSON.stringify(message));
    }

    connectedCallback() {
        if (this.subscription) {
            return;
        }
        // subscribe will receive the context,the custom message channel and a payload method which will get 
        // the payload as an argument (message)
        this.subscription = subscribe(
            this.context,
            MyMessageChannel,
            // this will be the payload in the publish method in the publisher component
            (message) => {
                this.handleMessage(message);
            },
            /*
            subscriberOptions : (Optional) An object that, when set to `{scope: APPLICATION_SCOPE}`, 
            specifies the ability to receive messages on a message channel from anywhere in the application. 
            Import `APPLICATION_SCOPE` from `lightning/messageService`.
            */
            { scope: APPLICATION_SCOPE }
        );
    }

    unsubscribeMC() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    disconnectedCallback() {
        releaseMessageContext(this.context);
    }
}
