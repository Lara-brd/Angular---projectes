import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { appRoutingProviders, routing } from './app.routing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShipInfoComponent } from './components/ship-info/ship-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    NavbarComponent,
    ShipInfoComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routing,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
