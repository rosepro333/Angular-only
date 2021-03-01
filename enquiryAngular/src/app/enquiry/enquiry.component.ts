import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EnquiryService } from '../Services/enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent  implements OnInit {

  enquiryForm=this.fb.group({

  
    name:["" ,[Validators.required]],
    phoneNo:[  ,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email:["" ,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    message:["" ,[Validators.required,Validators.minLength(5)]]
  
   // - +()0-9]+     phone no
   //Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.0-9]*$")
   
   //email address
   //Validators.pattern("^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
   //^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$

  });

  constructor(private router:Router ,private enquiryService:EnquiryService ,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  

submit(){

    if(this.enquiryForm.valid==false)
    {
                
      alert("form is invalid")
  
    }
    else{
      
              const name=this.enquiryForm.value.name;
              const phoneNo=this.enquiryForm.value.phoneNo;
              const email=this.enquiryForm.value.email;
              const message=this.enquiryForm.value.message;
              
             // alert(name);
              //alert(phoneNo);
              //alert(email);
              //alert(message);

            const user= this.enquiryService.add(name,phoneNo,email,message);
            if(user==1)
            {
             
              alert("message sent successfully")
             // swal:any=("Good job!", "You clicked the button!", "success");
              this.router.navigateByUrl("/details");
              //window.location.href="userhome.html"
            }
              

    }
  }


}
