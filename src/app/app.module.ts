import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';

@NgModule({
  declarations: [AppComponent, PortfolioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
