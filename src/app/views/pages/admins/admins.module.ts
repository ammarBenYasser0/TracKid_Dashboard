import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminTableComponent,
  },
];

@NgModule({
  declarations: [AdminTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminsModule {}
