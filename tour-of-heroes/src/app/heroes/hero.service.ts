import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl = 'api/heroes'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched Heroes');
    return this.httpClient
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError('getHeroes', [])));
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.httpClient.get<Hero>(url).pipe(
      tap((_) => this.messageService.add(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>('getHero'))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.httpClient
      .put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(
          (_) => this.messageService.add(`updated ${hero.name} 's information`),
          catchError(this.handleError<any>('update failed'))
        )
      );
  }

  addHero(hero: Hero): Observable<any> {
    return this.httpClient
      .post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(
          (_) => this.messageService.add(`added ${hero.name} 's information`),
          catchError(this.handleError<any>('add hero failed'))
        )
      );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.httpClient.delete<Hero>(url, this.httpOptions).pipe(
      tap((_) => this.messageService.add(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchByName(name: string): Observable<Hero[]> {
    if (!name.trim()) {
      // if not search name, return empty hero array.
      return of([]);
    }
    return this.httpClient.get<Hero[]>(`${this.heroesUrl}/?name=${name}`).pipe(
      tap((x) =>
        x.length
          ? this.messageService.add(`found heroes matching "${name}"`)
          : this.messageService.add(`no heroes matching "${name}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
