import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  //object in array...here we know each type..that why we mentioned the type...
history:{amount:number,transactionType:string}[]  = []
count:number=0;
perCount:number=0;

  constructor(private bankService:BankService) 
  {   this.history=bankService.getHistory();  }

  ngOnInit(): void {
     const val= parseInt(localStorage.getItem('myData') || '');
     this.viewCount(val)
  }

  viewCount(val:number){
     alert(val)
    this.perCount=val;
  }


  subCount(value:number)
  {
    this.count=this.count-value;
    this.perCount=this.perCount-value;
    localStorage.removeItem("myData");

    const jsonData = JSON.stringify(this.perCount)
    localStorage.setItem('myData', jsonData)
  }

  addCount(value:any){

    this.count=this.count+value;
    this.perCount=this.perCount+value;
    localStorage.removeItem("myData");

      const jsonData = JSON.stringify(this.perCount)
      localStorage.setItem('myData', jsonData)
    
  }




}
