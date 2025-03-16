import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface CarbonActivity {
  name: string;
  emissions: number;
  category: string;
  duration: string;
}

@Component({
  selector: 'app-carbon-tracker',
  templateUrl: './carbon-tracker.component.html',
  styleUrls: ['./carbon-tracker.component.css'],
  imports: [CommonModule],
})
export class CarbonTrackerComponent implements OnInit {
  carbonData: CarbonActivity[] = [
    {
      name: 'Using Electricity',
      emissions: 2.5,
      category: 'Electricity',
      duration: '2 hours',
    },
    {
      name: 'Watching TV',
      emissions: 1.2,
      category: 'Entertainment',
      duration: '1.5 hours',
    },
    {
      name: 'Charging Phone',
      emissions: 0.05,
      category: 'Electronics',
      duration: '30 minutes',
    },
    {
      name: 'Driving (10 km)',
      emissions: 3.8,
      category: 'Transport',
      duration: '20 minutes',
    },
  ];

  categories: string[] = [
    'All',
    'Electricity',
    'Entertainment',
    'Electronics',
    'Transport',
  ];
  selectedCategory: string = 'All';

  constructor() {}

  ngOnInit(): void {}

  filterCategory(category: string): void {
    this.selectedCategory = category;
  }

  get filteredData() {
    return this.selectedCategory === 'All'
      ? this.carbonData
      : this.carbonData.filter(
          (activity) => activity.category === this.selectedCategory
        );
  }
}
