import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({ imports: [PagesRoutingModule,
        AngularSvgIconModule.forRoot()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class PagesModule {}
