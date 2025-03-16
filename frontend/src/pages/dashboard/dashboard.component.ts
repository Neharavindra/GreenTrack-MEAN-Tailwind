import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarbonService } from '../../services/carbon.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class DashboardComponent implements OnInit {
  carbonData: any[] = [];
  activity: string = '';
  carbonEmissions!: number;

  constructor(private carbonService: CarbonService) {}

  ngOnInit(): void {
    this.loadCarbonData();
  }

  loadCarbonData() {
    this.carbonService.getCarbonData().subscribe((data) => {
      this.carbonData = data;
    });
  }

  onSubmit() {
    if (!this.activity || !this.carbonEmissions) return;

    this.carbonService.addCarbonData(this.activity, this.carbonEmissions).subscribe(() => {
      this.loadCarbonData();
      this.activity = '';
      this.carbonEmissions = 0;
    });
  }
}
