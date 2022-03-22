import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

//components
import { HomeComponent } from "./components/home/home.component";
import { ShipInfoComponent } from "./components/ship-info/ship-info.component";
import { StarshipsComponent } from "./components/starships/starships.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";


const appRoutes:Routes = [
  {path: '', component:WelcomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'starships/:id', component: ShipInfoComponent},
  {path: 'starships', component:StarshipsComponent},
  {path: 'signup', component:SignupComponent},
  {path: '**', component:HomeComponent},
]

export const appRoutingProviders:any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);