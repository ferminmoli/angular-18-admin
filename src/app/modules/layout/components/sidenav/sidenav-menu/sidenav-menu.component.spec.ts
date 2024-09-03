import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavMenuComponent } from './sidenav-menu.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterModule } from '@angular/router';

describe('SideNavMenuComponent', () => {
  let component: SideNavMenuComponent;
  let fixture: ComponentFixture<SideNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SideNavMenuComponent, AngularSvgIconModule.forRoot(), RouterModule.forRoot([])],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
