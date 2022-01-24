import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


import { AppHomeComponent } from './app-home/app-home.component';
import { AppWeatherComponent } from './app-weather/app-weather.component';
import { RestApiService } from './rest-api.service';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { DayPipe } from './day.pipe';
import { IconUrlPipe } from './app-weather/icon-url.pipe';
import { AppStocksComponent } from './app-stocks/app-stocks.component';



@NgModule({
  declarations: [ AppHomeComponent, AppWeatherComponent,DayPipe, IconUrlPipe, AppStocksComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DropDownsModule,
    FormsModule
  ],
  providers: [
   RestApiService
]
})
export class HomeModule { }
