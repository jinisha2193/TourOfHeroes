import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService
      .getHeroes()
      .subscribe((response) => (this.heroes = response.slice(1, 5)));
  }
}
