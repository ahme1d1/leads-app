import { NgModule } from '@angular/core';
import { LeadsListComponent } from './leads-list/leads-list.component';
import { LeadsRoutingModule } from './leads-routing.module';
import { CommonModule } from '@angular/common';
import { PotentialDuplicatesComponent } from './potential-duplicates/potential-duplicates.component';

@NgModule({
  imports: [
    LeadsRoutingModule,
    CommonModule
  ],
  declarations: [
    LeadsListComponent,
    PotentialDuplicatesComponent
  ]
})
export class LeadsModule { }
