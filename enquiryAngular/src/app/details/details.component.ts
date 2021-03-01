import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../Services/enquiry.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
//details:any=[];
   //object in array...here we know each type..that why we mentioned the type...
 details:{name:string,phoneNo:string,email:string,message:string}[]  = [];


constructor(private enquiryService:EnquiryService ) 
{

this.details=enquiryService.getDetails();

 }



  ngOnInit(): void {
  }

}
