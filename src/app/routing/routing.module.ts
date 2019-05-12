import { NgModule } from '@angular/core';
import { RouterModule, Routes as NgRoutes } from '@angular/router';
import { Routes } from './routes.enum';
import { DashboardComponent } from '../view/dashboard/dashboard.component';
import { NotFoundComponent } from '../view/not-found/not-found.component';
import { PageLayoutComponent } from '../layout/page-layout/page-layout.component';
import { JassComponent } from '../view/jass/jass.component';
import { HeartsComponent } from '../view/hearts/hearts.component';

const routes: NgRoutes = [
  {path: '', pathMatch: 'full', redirectTo: Routes.DASHBOARD},
  {
    path: '', component: PageLayoutComponent, children: [
      {path: Routes.DASHBOARD, component: DashboardComponent},
      {path: Routes.JASS, component: JassComponent},
      {path: Routes.HEARTS, component: HeartsComponent},
      {path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
