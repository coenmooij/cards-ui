import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { gamesComponents } from './games/games.components';
import { layoutComponents } from './layout/layout.components';

const COMPONENTS = [
  ...layoutComponents,
  ...gamesComponents
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {
}
