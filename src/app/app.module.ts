import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
