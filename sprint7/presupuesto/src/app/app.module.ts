import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PriceService } from './services/price.service';
import { PanellComponent } from './components/panell/panell.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { appRoutingProviders, routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [PriceService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
