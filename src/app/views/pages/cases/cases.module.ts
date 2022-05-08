import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases/cases.component';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { CasesService } from './services/cases.service';
import { CasesRoutingModule } from './cases-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleCaseComponent } from './cases/single-case/single-case.component';

 
@NgModule({
  declarations: [CasesComponent,SingleCaseComponent],
  imports: [
    CommonModule,
    CasesRoutingModule,
    NgbModule,
    NgbPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [CasesService],
})
export class CasesModule {}
