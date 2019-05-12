import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { BingoComponent } from './bingo/bingo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HartenjagenComponent } from './hartenjagen/hartenjagen.component';
import { KlaverjassenComponent } from './klaverjassen/klaverjassen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PongComponent } from './pong/pong.component';
import { SudokuComponent } from './sudoku/sudoku.component';

const COMPONENTS = [
  DashboardComponent,
  NotFoundComponent,
  KlaverjassenComponent,
  HartenjagenComponent,
  BingoComponent,
  PongComponent,
  SudokuComponent
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ViewModule {
}
