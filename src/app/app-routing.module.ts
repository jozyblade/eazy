import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PartnersComponent } from "./partners/partners.component";
import { AboutComponent } from "./about/about.component";
import { ConnectComponent } from './connect/connect.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "partners", component: PartnersComponent },
  { path: "about", component: AboutComponent },
  { path: "home", component: HomeComponent },
  { path: "connect", component: ConnectComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
