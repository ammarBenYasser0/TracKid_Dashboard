import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
import {UsersService} from '../Service/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor( private _usersService:UsersService) {
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wva3JvbWJvLjAwMHdlYmhvc3RhcHAuY29tXC9hcGlcL2FkbWluXC9sb2dpbiIsImlhdCI6MTY0ODI0NDM4NiwibmJmIjoxNjQ4MjQ0Mzg2LCJqdGkiOiJPN0ZuTFBwZzN0S09lVDhwIiwic3ViIjoxLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.O3cTvFJzduKmuSbrqIr6uGPl1lQFEoyokDGPnQZKR6o')
    _usersService.getUsers().subscribe((response) => {
      console.log(response.data)
    })
   }
  refresh: Function;
  users = [
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "عبد الرحيم النجار بهاء",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],
    [
      "محمود أحمد عويس",
      "fcai.is.frustrating@fcai.com",
      "01099609915",
      `
        <button class=" btn btn-edit mx-2 px-2 py-1 bg-success bg-opacity-25 text-success rounded" (click)="editFaq(i , basicModal)">
        <i class="feather icon-edit-2"></i>
        </button>
        <button class="btn btn-lock  px-2 py-1 bg-dark bg-opacity-25 text-dark rounded"  (click)="$event.preventDefault();users.splice(i,1)">
        <i class="feather icon-lock"></i>
        </button>
        <button class="btn btn-delete mx-2 px-2 py-1 bg-danger bg-opacity-25 text-danger rounded"  (click)="deleteRow($event)">
        <i class="feather icon-trash"></i>
        </button>
      `
    ],

  ]

  deleteRow(event:any){
    alert("hi")
    let index = this.users.indexOf(event.target)
    this.users.splice(index,1)
  }
  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
    dataTable.rows().add(this.users);
    this.refresh = dataTable.refresh();
    let deletebtns = Array.from(document.getElementsByClassName('btn-delete'));
    
  }

}
