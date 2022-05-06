import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasesService } from '../../services/cases.service';

@Component({
  selector: 'app-single-case',
  templateUrl: './single-case.component.html',
  styleUrls: ['./single-case.component.scss']
})
export class SingleCaseComponent implements OnInit {
  id:number
  constructor(private _casesService: CasesService,private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id']
    });
  }
  kidData:any = ''
  ngOnInit(): void {
    this.getData(this.id)
  }

  getData(id:number){
    this._casesService.getsinglekid(id).subscribe(res=>{
      if(res.status){
        this.kidData = res?.data;
       
      }
     
    })
  }
}
