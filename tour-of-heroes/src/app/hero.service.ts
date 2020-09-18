import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { heroes } from './mockData/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched Heroes');
    return of(heroes);
  }

  getHero(id: number): Observable<Hero> {
    return of(heroes.find((hero: Hero) => hero.id === id));
  }
}
