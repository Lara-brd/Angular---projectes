//importar los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//components
import { HomeComponent } from "./components/home/home.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { PruebaComponent } from "./components/prueba/prueba.component";

//Array de rutas
const appRoutes:Routes = [
  {path:'', component: WelcomeComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'home', component:HomeComponent},
  {path:'prueba', component:PruebaComponent},
  {path: '**', component:WelcomeComponent}
];

//Exportar el modulo de rutas
export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);



