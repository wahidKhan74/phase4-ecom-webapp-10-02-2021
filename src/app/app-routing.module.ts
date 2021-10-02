import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ListComponent } from './components/products/list/list.component';
import { CreateComponent } from './components/products/create/create.component';
import { UpdateComponent } from './components/products/update/update.component';

const routes: Routes = [
  { path:"", redirectTo:'/home', pathMatch:'full'},
  { path:"home", component:HomeComponent},
  { path:"login", component:LoginComponent},
  { path:"register", component:RegisterComponent},
  { path:"about", component:AboutComponent},
  { path:"products", children:[
    { path:"",component:ProductsComponent},
    { path:"list",component:ListComponent},
    { path:"create",component:CreateComponent},
    { path:"update",component:UpdateComponent}
  ]},
  { path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
