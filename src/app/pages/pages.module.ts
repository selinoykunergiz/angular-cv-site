import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CvCommonComponent } from './_index';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CvCommonComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
