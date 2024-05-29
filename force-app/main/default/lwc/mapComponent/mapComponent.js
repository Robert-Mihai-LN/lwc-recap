import { LightningElement,wire } from 'lwc';
// getRecords is a method on HouseService class 
import getHouses from "@salesforce/apex/HouseService.getRecords";

export default class MapComponent extends LightningElement {
   mapMarkers; 
   error;
   @wire(getHouses)
   wiredHouses({error,data}){
      if(data){
        this.mapMarkers = data.map(house => {
            return {
                location :{
                 Street: house.Address__c,
                 City:house.City__c,
                 State: house.State__c
                },
                title:house.Name
            }
        })
        this.error = undefined;
      }
      else if(error){
        this.error = error;
        this.mapMarkers = undefined;
      }
   }
}