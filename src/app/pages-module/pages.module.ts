import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModuleRouting } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesModuleRouting
  ]
})
export class PagesModule { }
