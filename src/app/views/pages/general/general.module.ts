import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeahterIconModule } from '../../../core/feather-icon/feather-icon.module';
import {
  NgbAccordionModule,
  NgbDropdownModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

import { GeneralComponent } from './general.component';
import { BlankComponent } from './blank/blank.component';
import { FaqComponent } from './faq/faq.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: '',
        redirectTo: 'blank-page',
        pathMatch: 'full',
      },
      {
        path: 'blank-page',
        component: BlankComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [GeneralComponent, BlankComponent, FaqComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeahterIconModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbTooltipModule,
  ],
})
export class GeneralModule {}
