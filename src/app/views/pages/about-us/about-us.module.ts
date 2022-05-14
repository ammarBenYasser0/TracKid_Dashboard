import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsEditorComponent } from './about-us-editor/about-us-editor.component';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: AboutUsEditorComponent,
  },
];

@NgModule({
  declarations: [AboutUsEditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
})
export class AboutUsModule {}
