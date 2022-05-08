import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
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


  deleteTask(id:number) {
    Swal.fire({
      title: 'هل انت متأكد؟',
      text: 'لن تكون قادر على استعاده هذا',
      icon: 'warning',
      confirmButtonColor: '#73BB59',
      showCancelButton: true,
      confirmButtonText: 'نعم احذفها',
      cancelButtonText: 'لا تحذفها'
    }).then((result:any) => {
      if (result.isConfirmed) {
        /* this.subscriptions.add(this._BookingService.deleteClinicOrHospital(id).subscribe(
          (res:any) => {

            this.emitEventToChild();
            swal.fire(
              'Deleted!',
              'Clinic has been deleted.',
              'success'
            )
          })); */
          this.deleteKidCase(id)
      
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'تم الغاء الحذف',
          '',
          'error'
        )
      }
    })
 



  }
  deleteKidCase(id:number){
    this._casesService.deleteKidCase(id).subscribe(res=>{
      if(res.status){
      /*   this.kidData = res?.data; */
        Swal.fire(
          'تم الحذف',
          '',
          'success'
        )
      }
     
    })
  }

  updateKidCase(id:number,kidnap_status:string){
    this._casesService.updateKidCase(id,kidnap_status).subscribe(res=>{
      if(res.status){
      /*   this.kidData = res?.data; */
      if(kidnap_status == 'active'){
        Swal.fire(
          'تم التفعيل بنجاح',
          '',
          'success'
        )
      }else{
        Swal.fire(
          'تم الاغلاق بنجاح',
          '',
          'success'
        )
      }
       
      }
     
    })
  }


}
