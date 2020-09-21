import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService
      .getHero(id)
      .subscribe((response) => (this.hero = response));
  }

  goBack(): void {
    // this.location.back();
    const id = +this.route.snapshot.paramMap.get('id');
    const heroId = id ? id : null;
    this.rotuer.navigate(['/heroes', { heroId }]);
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private rotuer: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
}
