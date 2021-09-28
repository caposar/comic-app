import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeDetalleComponent } from './components/heroe-detalle/heroe-detalle.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, // De esta manera nos evitamos la redireccion
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroes/:id', component: HeroeDetalleComponent},
  {path: 'heroes/search/:texto', component: HeroesComponent, data: {num: 7}},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
