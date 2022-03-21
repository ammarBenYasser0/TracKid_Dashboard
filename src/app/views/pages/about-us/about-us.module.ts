import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsEditorComponent } from './about-us-editor/about-us-editor.component';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsService } from './about-us.service';

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
  ],
  providers: [AboutUsService],
})
export class AboutUsModule {}
