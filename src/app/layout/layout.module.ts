import { NgModule } from '@angular/core';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  PageLayoutComponent
];

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class LayoutModule {
}
