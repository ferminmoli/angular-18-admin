import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavComponent } from './sidenav.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SideNavComponent, RouterModule.forRoot([]), AngularSvgIconModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
