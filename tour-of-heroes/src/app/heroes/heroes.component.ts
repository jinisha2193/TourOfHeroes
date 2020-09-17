import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroes } from '../mockData/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedHero: Hero;
  heroes = heroes;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
