import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeahterIconModule } from '../../../core/feather-icon/feather-icon.module';

// ngx-quill
import { QuillModule } from 'ngx-quill';

// angular-archwizard
import { ArchwizardModule } from 'angular-archwizard';

import { FormElementsComponent } from './form-elements.component';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';

const routes: Routes = [
  {
    path: '',
    component: FormElementsComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-elements',
        pathMatch: 'full',
      },
      {
        path: 'basic-elements',
        component: BasicElementsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [FormElementsComponent, BasicElementsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FeahterIconModule,
    QuillModule.forRoot(), // ngx-quill
    ArchwizardModule, // angular-archwizard
  ],
})
export class FormElementsModule {}
