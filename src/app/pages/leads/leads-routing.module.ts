import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsListComponent } from './leads-list/leads-list.component';
import { PotentialDuplicatesComponent } from './potential-duplicates/potential-duplicates.component';

const routes: Routes = [
  { path: '', component: LeadsListComponent },
  { path: ':id', component: PotentialDuplicatesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsRoutingModule {}
