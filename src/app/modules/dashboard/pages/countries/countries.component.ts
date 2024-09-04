import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/services/country.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {
  countries: any[] = [];

  constructor(private countriesService: CountryService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countriesService.getCountries().subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
