import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lead } from '../../interfaces/i-leads';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Method to list all leads
  getLeads(): Observable<Lead[]> {
    const url = `${this.apiBaseUrl}/api/leads`;
    return this.http.get<Lead[]>(url);
  }

  // Method to retrieve potential duplicates for a lead
  getPotentialDuplicates(leadId: string): Observable<string[]> {
    const url = `${this.apiBaseUrl}/api/leads/${leadId}/potential-duplicates`;
    return this.http.get<string[]>(url);
  }

  // Method to mark a lead as a duplicate
  markAsDuplicate(leadId: string, data: Partial<Lead>): Observable<Lead> {
    const url = `${this.apiBaseUrl}/api/leads/${leadId}`;
    return this.http.put<Lead>(url, data);
  }
}
