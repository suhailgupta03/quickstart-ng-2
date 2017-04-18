import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

/**
 * - The CSS selector name 'hero-detail' will match the element tag that  
 * identifies the component within a parent component's template
 * 
 * - Always export the component because you will always import it 
 *   elsewhere
 */
@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: [ './hero-detail.component.css' ]

})
export class HeroDetailComponent implements OnInit {
    /**
     * Declare that hero is an input property  by preceding it with the 
     * @Input decorator imported above
     */
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}