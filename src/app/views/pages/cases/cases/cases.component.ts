import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
 
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
 
import { CasesService } from '../services/cases.service';

@Component({
  selector: 'cases-editor',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
})
export class CasesComponent implements OnInit,OnDestroy {
  constructor(private _casesService: CasesService) {}
  pageSize = 10;
  page = 1;
  total = 10;
  isLoading = false;
  changeTaps(e:any){
    console.log(e);
    if(e.nextId == 1){
      this.getData(1,'')
      this.currentStatus = ''
    }else if(e.nextId == 2){
      this.getData(1,'active')
      this.currentStatus = 'active'
    }else if(e.nextId == 3){
      this.getData(1,'pending')
      this.currentStatus = 'pending'
    }else if(e.nextId == 4){
      this.getData(1,'closed')
      this.currentStatus = 'closed'
    } 
  }
 
  dataArr:any =  [
    /* {
        "name": "name",
        "status": "not_found",
        "kidnap_status": "active",
        "age": 15,
        "city": "beni suef ",
        "kidnap_date": '2022/03/10'
    } */
]
  responseObj:any = {
  /* "statues": true,
  "code": 200,
  "data": {
      "current_page": 1,
      "data": [
          {
              "name": "name",
              "status": "not_found",
              "kidnap_status": "active",
              "age": 15,
              "city": "beni suef ",
              "kidnap_date": '2022/03/10'
          }
      ],
      "first_page_url": "http://127.0.0.1:8000/api/admin/kids/index?page=1",
      "from": 1,
      "last_page": 2,
      "last_page_url": "http://127.0.0.1:8000/api/admin/kids/index?page=2",
      "next_page_url": "http://127.0.0.1:8000/api/admin/kids/index?page=2",
      "path": "http://127.0.0.1:8000/api/admin/kids/index",
      "per_page": 1,
      "prev_page_url": null,
      "to": 1,
      "total": 2
  } */
}
   private subscriptions = new Subscription()

  aboutUsForm = new FormGroup({
    content: new FormControl(),
  });

  ngOnInit(): void {
    // Init Data
    this.getData(1,this.currentStatus)
 
  }

  currentStatus = ''
  changePage(e:any){
    console.log(e);
    // Pagination
    this.getData(e,this.currentStatus)
  }
  getData(offset:number = 1,status:string){
    // Make  subscription
    this.isLoading = true
    this.subscriptions.add(
      this._casesService.getkids(offset,status).subscribe(res=>{
        if(res.statues){

          this.dataArr = res?.data?.data;
          this.responseObj =res
        }
        this.isLoading = false;
      },(error)=>{
       // Error Handilling
        Swal.fire({
          icon: 'error',
          title: 'نأسف...',
          text: 'لقد حدث شئ خطأ',
          
        })
     
    })
    )
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.unsubscribe()
     
    
  }

  
}
