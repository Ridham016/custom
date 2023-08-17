import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { NgxUiLoaderModule,NgxUiLoaderRouterModule,NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { SelectAllSearchDirective } from './component/select-all-plus-search/select-all-search-directive.directive';

@NgModule({
  declarations: [AppComponent, SelectAllSearchDirective],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,NgxUiLoaderModule,NgxUiLoaderRouterModule,NgxUiLoaderHttpModule.forRoot({ showForeground: true })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
