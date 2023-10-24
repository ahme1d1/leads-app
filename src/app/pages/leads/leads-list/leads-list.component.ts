import { Component, OnInit } from '@angular/core';
import { Lead } from 'src/app/core/interfaces/i-leads';
import { LeadsService } from 'src/app/core/services/leads/leads.service';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {
  leads: Lead[] = [];

  constructor(private leadsService: LeadsService) { }

  ngOnInit(): void {
    this.loadLeads();
  }

  loadLeads() {
    this.leadsService.getLeads().subscribe(data => {
      console.log(data, 'data')
      this.leads = data;
    });
  }

}
