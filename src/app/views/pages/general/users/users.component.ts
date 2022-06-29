import { Component, OnInit , TemplateRef } from '@angular/core';
import { UsersService } from '../Service/users.service';
import { HotToastService } from '@ngneat/hot-toast';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any = [ 
    // { 'name': '', 'email': '', 'id': 0, 'status':'' }
  ];
  user:any = {}
  page = 1;
  last_page: number;
  userId: number;
  term: string;
  isLoading = false;
  isActivating = false;
  basicModalCloseResult: string = '';

  constructor(private modalService: NgbModal,private _usersService: UsersService, private toastService: HotToastService) {
    this.isLoading = true;
    _usersService.getUsers(this.page).subscribe((response) => {
      this.users = response.data.data;
      this.page = response.data.current_page;
      this.last_page = response.data.total;
      this.isLoading =false;
    })
  }
  /*
    ========================================
    ---------------Get Users----------
    ========================================
  */
  getUsers(number: number) {
    this._usersService.getUsers(number).subscribe((response) => {
      this.users = response.data.data
      this.last_page = response.data.total; //To Updata Pignation After Any Operation
      this.isLoading = false;

    })
  }
  /*
    ========================================
    ---------------Delete User--------------
    ========================================
  */
  deleteUser() {
    this._usersService.deleteUser(this.user.id).subscribe();
    this._usersService.getUsers(this.page).subscribe((response) => {
      if (response.error) {
        this.toastService.error(response.error.question[0])
      }
      else {
        this.toastService.success("لقد تم حذف المستخدم بنجاح")
      }
      this.getUsers(this.page);
      this.modalService.dismissAll('Reason');
    })
  }

  openDeleteModal(content: TemplateRef<any> , user:any) {
    this.user = user ;
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => { });
  }

  openActivateModal(content: TemplateRef<any> , user:any) {
    this.user = user ;
    if(this.user.status == "active"){
      this.isActivating=false
    }else{
      this.isActivating=true
    }
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => { });
  }
  /*
    ========================================
    ---------------change Page--------------
    ========================================
  */
  changePage(e: any) {
    this.page = e;
    this._usersService.getUsers(e).subscribe((response) => {
      this.users = response.data.data
    })
    document.documentElement.scrollTop = 0 //to scroll to top 0
  }
  /*
    ========================================
    ---------------refresh--------------
    ========================================
  */
  refresh() {
    this.getUsers(1);
    this.term = '';
    this.page = 1;
    this.isLoading = true;

  }
  /*
    ========================================
    ---------update User Status-------------
    ========================================
  */
  updateUserStatus(status: string) {
    if(status == "active"){
      this.isActivating=true
    }else{
      this.isActivating=false
    }
    this._usersService.updateUserStatus(this.user.id , status).subscribe((response)=>{
      if(response.data.status == "active"){
        this.toastService.success(response.message + 'المستخدم الان نشط');

      }else{
        this.toastService.success(response.message + 'المستخدم الان غير نشط');

      }
      this.getUsers(this.page);
      this.modalService.dismissAll('Reason');

    })
  }
  ngOnInit(): void {
    // Init Data
    // if(this.users.length > 0){
    //   this.isLoading = true;
    // }

  }

}
