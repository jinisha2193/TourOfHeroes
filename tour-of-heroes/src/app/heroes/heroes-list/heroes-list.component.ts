import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../../message.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {
  selectedId: number;
  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHeroes();
    this.selectedId = +this.route.snapshot.paramMap.get('heroId');
  }
}
