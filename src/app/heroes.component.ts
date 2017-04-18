import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  /**
   * The constructor itself does nothing. 
   * The parameter simultaneously defines a private heroService property and 
   * identifies it as a HeroService injection site.
   */
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    /**
     * On being tempted to call this.getHeroes from the constructor function:
     * Constructor should not contain complex logic, expecially a constructor that
     * calls a server, such as a data access method
     */
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}