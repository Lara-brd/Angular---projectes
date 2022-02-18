
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders} from './app.routing';


// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PriceService } from './services/price.service';
import { PanellComponent } from './components/panell/panell.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PruebaComponent } from './components/prueba/prueba.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    WelcomeComponent,
    PruebaComponent
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
