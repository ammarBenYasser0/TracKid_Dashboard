import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './cases/cases.component';


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
   
 ]
 },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule { }
