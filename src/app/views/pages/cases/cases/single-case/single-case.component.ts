import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { CasesService } from '../../services/cases.service';

@Component({
  selector: 'app-single-case',
  templateUrl: './single-case.component.html',
  styleUrls: ['./single-case.component.scss'],
})
export class SingleCaseComponent implements OnInit {
  id: number;
  constructor(
    private _casesService: CasesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      console.log(params['id']); //log the value of id
      this.id = params['id'];
    });
  }

  isLoading = false;
  kidData: any = '';
  ngOnInit(): void {
    this.getData(this.id);
  }
  private subscriptions = new Subscription();
  getData(id: number) {
    this.isLoading = true
    this.subscriptions.add(
      this._casesService.getsinglekid(id).subscribe(
        (res) => {
          this.isLoading = false;
          if (res.status) {
            this.kidData = res?.data;
            this.kidData.kid_image = [
              ...this.kidData.kid_image,
              {
                image: this.kidData.birth_image,
              },
              ...this.kidData.prediction_image,
            ];
          } else {
            Swal.fire({
              icon: 'error',
              title: 'نأسف...',
              text: 'لقد حدث شئ خطأ',
            });
            this.router.navigate(['/cases/allCases']);
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'نأسف...',
            text: 'لقد حدث شئ خطأ',
          });
          this.router.navigate(['/cases/allCases']);
        }
      )
    );
  }

  deleteTask(id: number) {
    Swal.fire({
      title: 'هل انت متأكد؟',
      text: 'لن تكون قادر على استعاده هذا',
      icon: 'warning',
      confirmButtonColor: '#73BB59',
      showCancelButton: true,
      confirmButtonText: 'نعم احذفها',
      cancelButtonText: 'لا تحذفها',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.deleteKidCase(id);

        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('تم الغاء الحذف', '', 'error');
      }
    });
  }
  deleteKidCase(id: number) {
    this.subscriptions.add(
      this._casesService.deleteKidCase(id).subscribe(
        (res) => {
          if (res.status) {
            Swal.fire('تم الحذف', '', 'success');
          } else {
            Swal.fire({
              icon: 'error',
              title: 'نأسف...',
              text: 'لقد حدث شئ خطأ',
            });
            this.router.navigate(['/cases/allCases']);
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'نأسف...',
            text: 'لقد حدث شئ خطأ',
          });
          this.router.navigate(['/cases/allCases']);
        }
      )
    );
  }

  updateKidCase(id: number, kidnap_status: string) {
    this.subscriptions.add(
      this._casesService.updateKidCase(id, kidnap_status).subscribe(
        (res) => {
          if (res.status) {
            /*   this.kidData = res?.data; */
            if (kidnap_status == 'active') {
              Swal.fire('تم التفعيل بنجاح', '', 'success');
            } else {
              Swal.fire('تم الاغلاق بنجاح', '', 'success');
            }
          } else {
            Swal.fire({
              icon: 'error',
              title: 'نأسف...',
              text: 'لقد حدث شئ خطأ',
            });
            this.router.navigate(['/cases/allCases']);
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'نأسف...',
            text: 'لقد حدث شئ خطأ',
          });
          this.router.navigate(['/cases/allCases']);
        }
      )
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.unsubscribe();
  }
}
