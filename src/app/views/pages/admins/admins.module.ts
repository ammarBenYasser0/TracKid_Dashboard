import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

const routes: Routes = [
  {
    path: '',
    component: AdminTableComponent,
  },
];

@NgModule({
  declarations: [AdminTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxSkeletonLoaderModule,
  ],
})
export class AdminsModule {}
