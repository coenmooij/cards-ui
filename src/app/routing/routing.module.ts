import { NgModule } from '@angular/core';
import { RouterModule, Routes as NgRoutes } from '@angular/router';
import { Routes } from './routes.enum';
import { DashboardComponent } from '../view/dashboard/dashboard.component';
import { ScoreCardComponent } from '../view/score-card/score-card.component';
import { NotFoundComponent } from '../view/not-found/not-found.component';
import { PageLayoutComponent } from '../layout/page-layout/page-layout.component';

const routes: NgRoutes = [
  {path: '', pathMatch: 'full', redirectTo: Routes.DASHBOARD},
  {
    path: '', component: PageLayoutComponent, children: [
      {path: Routes.DASHBOARD, component: DashboardComponent},
      {path: Routes.SCORE_CARD, component: ScoreCardComponent},
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
