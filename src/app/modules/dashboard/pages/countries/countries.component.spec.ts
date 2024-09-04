import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './countries.component';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CountriesComponent, AngularSvgIconModule.forRoot(), RouterModule.forRoot([])],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();

    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
