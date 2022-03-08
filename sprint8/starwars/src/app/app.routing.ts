import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

//components
import { HomeComponent } from "./components/home/home.component";
import { StarshipsComponent } from "./components/starships/starships.component";
import { ShipFileComponent } from "./components/ship-file/ship-file.component";

const appRoutes:Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'starships', component:StarshipsComponent},
  {path: 'shipFile', component:ShipFileComponent},
  {path: '**', component:HomeComponent},
]

export const appRoutingProviders:any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);