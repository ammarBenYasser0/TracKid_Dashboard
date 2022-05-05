import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Service/users.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [ { 'name': '', 'email': '', 'id': 0, 'status':'' }];
  page = 1;
  last_page: number;
  term: string;

  constructor(private _usersService: UsersService, private toastService: HotToastService) {
    _usersService.getUsers(this.page).subscribe((response) => {
      this.users = response.data.data;
      this.page = response.data.current_page;
      this.last_page = response.data.total;
      console.log(this.users, this.last_page)
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

    })
  }
  /*
    ========================================
    ---------------Delete User--------------
    ========================================
  */
  deleteUser(number: number) {
    this._usersService.deleteUser(number).subscribe();
    this._usersService.getUsers(this.page).subscribe((response) => {
      if (response.error) {
        this.toastService.error(response.error.question[0])
      }
      else {
        this.toastService.success("لقد تم حذف المستخدم بنجاح")
      }
      this.getUsers(this.page);
    })
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
      console.log(this.users, this.page)
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
  }
  /*
    ========================================
    ---------update User Status-------------
    ========================================
  */
  updateUserStatus(status: string, id: number) {
    this._usersService.updateUserStatus(id , status).subscribe((response)=>{
      console.log(response.data)
      if(response.data.status == "active"){
        this.toastService.success(response.message + 'المستخدم الان نشط');

      }else{
        this.toastService.success(response.message + 'المستخدم الان غير نشط');

      }
      this.getUsers(this.page);
    })
  }
  ngOnInit(): void {
  }

}
