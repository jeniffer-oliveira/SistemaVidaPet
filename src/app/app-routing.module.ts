import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FuncionariosComponent } from './components/funcionarios-list/funcionarios.component';
import { ServicosComponent } from './components/servicos-list/servicos.component';

const routes: Routes = [
  {path: '', component: NavComponent, children:[ 
    {path: 'home', component: HomeComponent},
    {path: 'funcionarios', component: FuncionariosComponent},
    {path: 'servicos', component: ServicosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
