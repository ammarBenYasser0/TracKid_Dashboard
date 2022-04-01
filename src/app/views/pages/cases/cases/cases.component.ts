import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
 
import { Subscription } from 'rxjs';
 
import { CasesService } from '../services/cases.service';

@Component({
  selector: 'cases-editor',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
})
export class CasesComponent implements OnInit,OnDestroy {
  constructor(private _casesService: CasesService) {}

  dataArr = []
  responseObj = {}
   private subscriptions = new Subscription()

  aboutUsForm = new FormGroup({
    content: new FormControl(),
  });

  ngOnInit(): void {
    // this.aboutUsService.getContent();
    this.getData()
  }


  getData(limit:number = 10 , offset:number = 0){
    this._casesService.GetAllkidsByIndex().subscribe(res=>{
      this.dataArr = res?.data?.data;
      this.responseObj =res
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.unsubscribe()
     
    
  }

  
}
