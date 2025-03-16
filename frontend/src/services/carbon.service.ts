import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarbonData } from '../models/carbon.model';

@Injectable({
  providedIn: 'root',
})
export class CarbonService {
  private apiUrl = 'http://localhost:5000/api/carbon';

  constructor(private http: HttpClient) {}

  getCarbonData(): Observable<CarbonData[]> {
    return this.http.get<CarbonData[]>(this.apiUrl);
  }

  addCarbonData(activity: string, carbonEmissions: number): Observable<any> {
    return this.http.post(this.apiUrl, { activity, carbonEmissions });
  }
}
