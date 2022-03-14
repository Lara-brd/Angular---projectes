import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

//components
import { HomeComponent } from "./components/home/home.component";
import { ShipInfoComponent } from "./components/ship-info/ship-info.component";
import { StarshipsComponent } from "./components/starships/starships.component";


const appRoutes:Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'starships/:id', component: ShipInfoComponent},
  {path: 'starships', component:StarshipsComponent},
  {path: '**', component:HomeComponent},
]

export const appRoutingProviders:any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);