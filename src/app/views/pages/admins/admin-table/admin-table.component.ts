import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminsService } from '../services/admins.service';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminData } from '../models/adminData';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private adminsService: AdminsService,
    private toastService: HotToastService
  ) {}

  ngOnInit(): void {
    this.refreshAdmins();
  }

  // ---------------- VARS ----------------

  admins: AdminData[] = [];
  page = 1;
  pageSize: number;
  lastPage: number;
  collectionSize = this.admins.length;
  editAdminId: any;

  // ---------------- ADD MODAL ----------------

  addAdminForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  });

  onAddPasswordChange() {
    if (this.addPasswordConfirmation.value == this.addPassword.value) {
      this.addPasswordConfirmation.setErrors(null);
    } else {
      this.addPasswordConfirmation.setErrors({ mismatch: true });
    }
  }

  // TODO: find another way for this

  get addPassword(): AbstractControl {
    return this.addAdminForm.controls['password'];
  }

  get addPasswordConfirmation(): AbstractControl {
    return this.addAdminForm.controls['passwordConfirmation'];
  }

  openModal(content: TemplateRef<any>, adminId: number) {
    if (adminId) {
      this.editAdminId = adminId;
    }
    this.modalService.open(content, { centered: true });
  }

  closeAddAdmin() {
    const name = this.addAdminForm.value.name;
    const email = this.addAdminForm.value.email;
    const password = this.addAdminForm.value.password;
    const passwordConfirmation = this.addAdminForm.value.passwordConfirmation;

    this.adminsService
      .addAdmin(name, email, password, passwordConfirmation)
      .subscribe(
        (resdata) => {
          console.log(resdata);
          if (resdata.message == 'Validation error') {
            this.toastService.error('تأكد من صحة البيانات');
          } else {
            this.toastService.success('تمت إضافة المستخدم بنجاح');
            this.refreshAdmins();
          }
        },
        (err) => {
          console.log(err);
          this.toastService.error('حدث خطأ ما');
        }
      );
    this.addAdminForm.reset();
    this.modalService.dismissAll();
  }

  // ---------------- EDIT MODAL ----------------

  editAdminForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  });

  onEditPasswordChange() {
    if (this.editPasswordConfirmation.value == this.editPassword.value) {
      this.editPasswordConfirmation.setErrors(null);
    } else {
      this.editPasswordConfirmation.setErrors({ mismatch: true });
    }
  }

  // TODO: find another way for this

  get editPassword(): AbstractControl {
    return this.addAdminForm.controls['password'];
  }

  get editPasswordConfirmation(): AbstractControl {
    return this.addAdminForm.controls['passwordConfirmation'];
  }

  closeEditAdmin() {
    const name = this.editAdminForm.value.name;
    const email = this.editAdminForm.value.email;
    const password = this.editAdminForm.value.password;
    const passwordConfirmation = this.editAdminForm.value.passwordConfirmation;

    this.adminsService
      .updateAdmin(
        name,
        email,
        password,
        passwordConfirmation,
        this.editAdminId
      )
      .subscribe((resData) => {
        this.toastService.success(resData.message);
        this.refreshAdmins();
      });
    this.modalService.dismissAll();
  }

  // ---------------- TABLE ----------------

  refreshCountries(page: number) {
    this.refreshAdmins(page);
  }

  refreshAdmins(page: number = 1) {
    this.adminsService.getAdmins(page).subscribe((resData) => {
      this.admins = resData.data.data;

      this.lastPage = resData.data.last_page;
      this.pageSize = resData.data.per_page;
      this.collectionSize = this.pageSize * this.lastPage;
    });
  }

  onDelete(id: number) {
    this.adminsService.deleteAdmin(id).subscribe((resData) => {
      this.toastService.success(resData.message);
      this.refreshAdmins();
    });
  }
}
