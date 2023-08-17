import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CustomSearchbarComponent } from '../component/custom-searchbar/custom-searchbar.component';
import { SelectAllPlusSearchComponent } from '../component/select-all-plus-search/select-all-plus-search.component';
import { SelectAllSearchDirective } from '../component/select-all-plus-search/select-all-search-directive.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [HomePage,CustomSearchbarComponent,SelectAllPlusSearchComponent,SelectAllSearchDirective]
})
export class HomePageModule {}
