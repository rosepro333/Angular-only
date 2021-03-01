import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

 //object in array...here we know each type..that why we mentioned the type...
details:{name:string,phoneNo:string,email:string,message:string}[]  = [];

add=(name:string,phoneNo:string,email:string,message:string)=>
  {
      this.details.push({
        name:name,
        phoneNo:phoneNo,
        email:email,
        message:message
     })
     return 1;
  }

  //show details..........
  getDetails=()=>
  {
    return this.details;
  }
  
  


}
