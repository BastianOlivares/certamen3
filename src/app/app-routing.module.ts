import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from  './inicio/inicio.component';
import {CursoComponent} from './curso/curso.component'

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'curso', component:CursoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
