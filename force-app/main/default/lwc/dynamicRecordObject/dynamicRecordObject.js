import { LightningElement,api, wire } from 'lwc';
// uiRecordApi module is used for working with certain fields.It has methods for that (adapters)
import { getFieldValue, getRecord,getRecords } from 'lightning/uiRecordApi';
// this is a default import so we can give it any name 
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import CONTACT_PHONE from '@salesforce/schema/Contact.MobilePhone'
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name'

export default class DynamicRecordObject extends LightningElement {
    // the objectApiName and recordId are available on record pages,check xml 
    @api recordId;
    @api objectApiName
    record;
    email;
    phoneNumber;
    error;
    @wire(getRecord,{recordId:'$recordId',fields:[CONTACT_EMAIL_FIELD,CONTACT_PHONE]})
    wiredContact({error,data}){
        if(data){
            console.log('Data' + data)
            this.record = data;
            this.error = undefined;
            console.log(data.fields.Email.value);
            this.email = getFieldValue(data,CONTACT_EMAIL_FIELD);
            this.phoneNumber = getFieldValue(data,CONTACT_PHONE);
            /* To avoid manual fetching of fields we can just use get field value 
               So instead of this : 
               this.email = data.fields.Email.value;
               Do 
               this.email = getFieldValue(data,CONTACT_EMAIL_FIELD); // pass the retrieved data and the field 
            */
        }
        else if(error){
            this.error = error;
            console.log('Error ' + error)
            this.record = undefined;
        }
    }

   


    @wire(getRecords,{
        records : [ 
         {
           recordIds : ['id1'],
           fields:[ACCOUNT_NAME_FIELD],
         },
         {
           recordIds : ['id2'],
           fields:[CONTACT_EMAIL_FIELD]
         }
        ] 
      })
      outputFunction({data,error}){
        if(data){
            console.log(data)
        }
        else {
            console.log(error);
        }
      };
} 