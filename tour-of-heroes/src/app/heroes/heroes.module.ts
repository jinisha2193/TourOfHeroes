import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesListComponent, HeroDetailsComponent],
  imports: [CommonModule, HeroesRoutingModule, FormsModule],
})
export class HeroesModule {}
