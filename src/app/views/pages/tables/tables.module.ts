import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-table',
        pathMatch: 'full',
      },
      {
        path: 'data-table',
        component: DataTableComponent,
      },
      {
        path: 'ngx-datatable',
        component: NgxDatatableComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [TablesComponent, DataTableComponent, NgxDatatableComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgxDatatableModule],
})
export class TablesModule {}
