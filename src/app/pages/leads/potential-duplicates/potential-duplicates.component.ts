import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lead } from 'src/app/core/interfaces/i-leads';
import { LeadsService } from 'src/app/core/services/leads/leads.service';

@Component({
  selector: 'app-potential-duplicates',
  templateUrl: './potential-duplicates.component.html',
  styleUrls: ['./potential-duplicates.component.scss']
})
export class PotentialDuplicatesComponent implements OnInit {

  leadId!: any;
  potentialDuplicates: string[] = [];

  constructor(private route: ActivatedRoute, private leadsService: LeadsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.leadId = params.get('id');
      this.loadPotentialDuplicates();
    });
  }

  loadPotentialDuplicates() {
    this.leadsService.getPotentialDuplicates(this.leadId).subscribe((duplicates) => {
      this.potentialDuplicates = duplicates;
    });
  }

  markDuplicate(leadId: string, duplicateId: string) {
    const data: Partial<Lead> = {
      duplicate_of: duplicateId,
    };
    this.leadsService.markAsDuplicate(leadId, data).subscribe(
      (result) => {
       console.log(`Marked lead ${leadId} as a duplicate of ${duplicateId}`);
      },
      (error: any) => {
        console.error(`Error marking lead as duplicate: ${error}`);
      }
    );
  }

}
