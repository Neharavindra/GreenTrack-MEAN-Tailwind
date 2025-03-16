import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HomeComponent } from '../pages/home/home.component';
import { CarbonTrackerComponent } from '../pages/carbon-tracker/carbon-tracker.component';
import { ProfileComponent } from '../pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'carbon-tracker', component: CarbonTrackerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];
