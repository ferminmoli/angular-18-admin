import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SalesComponent } from './pages/sales/sales.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'sales', pathMatch: 'full' },
      { path: 'sales', component: SalesComponent },
      { path: 'countries', component: CountriesComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
