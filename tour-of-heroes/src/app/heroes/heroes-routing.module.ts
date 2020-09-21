import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesListComponent },
  { path: 'detail/:id', component: HeroDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
