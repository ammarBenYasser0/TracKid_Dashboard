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

  isLoading = true;
  ngOnInit(): void {
    this.refreshAdmins();
  }

  onOpenModal(content: TemplateRef<any>, admin: AdminData, modal: string) {
    if (admin) {
      this.loadedAdmin = admin;
    }

    if (modal == 'edit') {
      this.editAdminForm.patchValue({
        name: this.loadedAdmin.name,
        email: this.loadedAdmin.email,
      });
    }

    this.modalService.open(content, { centered: true });
  }

  // ---------------- VARS ----------------

  admins: AdminData[] = [];
  page = 1;
  pageSize: number;
  lastPage: number;
  collectionSize = this.admins.length;
  loadedAdmin: AdminData;
  generatedPassword: string;

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

  onAddAdmin() {
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
  });

  onEditAdmin() {
    const name = this.editAdminForm.value.name;
    const email = this.editAdminForm.value.email;

    this.adminsService
      .updateAdminData(name, email, this.loadedAdmin.id)
      .subscribe(
        (resData) => {
          this.toastService.success(resData.message);
          this.refreshAdmins();
        },
        (err) => {
          console.log(err);
          this.toastService.error('حدث خطأ ما');
        }
      );
    this.modalService.dismissAll();
  }

  // ---------------- CHANGE PASSWORD MODAL ----------------

  editPasswordForm = new FormGroup({
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  });

  // TODO: find another way for this

  onEditPasswordChange() {
    if (this.editPasswordConfirmation.value == this.editPassword.value) {
      this.editPasswordConfirmation.setErrors(null);
    } else {
      this.editPasswordConfirmation.setErrors({ mismatch: true });
    }
  }

  get editPassword(): AbstractControl {
    return this.editPasswordForm.controls['password'];
  }

  get editPasswordConfirmation(): AbstractControl {
    return this.editPasswordForm.controls['passwordConfirmation'];
  }

  onPasswordChange() {
    console.log(this.editPasswordForm.value);
    const password = this.editPasswordForm.value.password;
    const passwordConfirmation =
      this.editPasswordForm.value.passwordConfirmation;

    this.adminsService
      .changeAdminPassword(
        password,
        passwordConfirmation,
        this.loadedAdmin.email,
        this.loadedAdmin.name,
        this.loadedAdmin.id
      )
      .subscribe(
        (resData) => {
          console.log(resData);
          this.toastService.success('تم تغيير كلمة السر بنجاح');
        },
        (err) => {
          console.log(err);
          this.toastService.error('حدث خطأ ما');
        }
      );
    this.editPasswordForm.reset();
    this.generatedPassword = '';
    this.modalService.dismissAll();
  }

  closeEditPasswordModal() {
    this.editPasswordForm.reset();
    this.generatedPassword = '';
    this.modalService.dismissAll();
  }

  generateRandomPassword() {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = '';
    for (let i = 0; i <= 15; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    this.generatedPassword = password;
    this.editPasswordForm.patchValue({
      password: this.generatedPassword,
      passwordConfirmation: this.generatedPassword,
    });
  }

  // ---------------- DELETE MODAL ----------------

  onDeleteAdmin() {
    this.adminsService.deleteAdmin(this.loadedAdmin.id).subscribe((resData) => {
      this.toastService.success(resData.message);
      this.refreshAdmins();
    });
    this.modalService.dismissAll();
  }

  // ---------------- TABLE ----------------

  onChangePage(page: number) {
    this.refreshAdmins(page);
  }

  refreshAdmins(page: number = 1) {
    this.adminsService.getAdmins(page).subscribe((resData) => {
      this.admins = resData.data.data;
      this.lastPage = resData.data.last_page;
      this.pageSize = resData.data.per_page;
      this.collectionSize = this.pageSize * this.lastPage;
      this.isLoading = false;
    });
  }
}
