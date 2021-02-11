import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BeerGridComponent } from './components/beer-grid/beer-grid.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { ApiService } from './services/api/api.service';
import { BeerService } from './services/beer/beer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    BeerGridComponent,
    BeerCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService, BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
