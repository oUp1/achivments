import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'achivments',
        loadChildren: () => import('../achivments-module/achivments.module').then(m => m.AchivmentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesModuleRouting { }
