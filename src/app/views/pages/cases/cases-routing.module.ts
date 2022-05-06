import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { SingleCaseComponent } from './cases/single-case/single-case.component';


const routes: Routes = [
 

  {
    path:'',
    redirectTo: 'allCases',
    pathMatch: 'full' 
 },
 {
 path: 'allCases',
 children: [
    
   {
     path: '',
     component:CasesComponent ,
     data: {
       title: 'All cases'
     }
   },
   {
    path: 'single-case/:id',
    component:SingleCaseComponent ,
    data: {
      title: 'All cases'
    }
  },
 ]
 },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule { }
