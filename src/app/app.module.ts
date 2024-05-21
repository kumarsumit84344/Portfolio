import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';

@NgModule({
  declarations: [AppComponent, PortfolioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    AccordionModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
