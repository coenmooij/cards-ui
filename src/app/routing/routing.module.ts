import { NgModule } from '@angular/core';
import { RouterModule, Routes as NgRoutes } from '@angular/router';
import { PageLayoutComponent } from '../layout/page-layout/page-layout.component';
import { BingoComponent } from '../view/bingo/bingo.component';
import { DashboardComponent } from '../view/dashboard/dashboard.component';
import { HartenjagenComponent } from '../view/hartenjagen/hartenjagen.component';
import { KlaverjassenComponent } from '../view/klaverjassen/klaverjassen.component';
import { NotFoundComponent } from '../view/not-found/not-found.component';
import { PongComponent } from '../view/pong/pong.component';
import { SudokuComponent } from '../view/sudoku/sudoku.component';
import { Routes } from './routes.enum';

const routes: NgRoutes = [
  {path: '', pathMatch: 'full', redirectTo: Routes.DASHBOARD},
  {
    path: '', component: PageLayoutComponent, children: [
      {path: Routes.DASHBOARD, component: DashboardComponent},
      {path: Routes.KLAVERJASSEN, component: KlaverjassenComponent},
      {path: Routes.HARTENJAGEN, component: HartenjagenComponent},
      {path: Routes.BINGO, component: BingoComponent},
      {path: Routes.SUDOKU, component: SudokuComponent},
      {path: Routes.PONG, component: PongComponent},
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
