import { Component, Input } from '@angular/core';

import {Hero} from './hero';

/**
 * - The CSS selector name 'hero-detail' will match the element tag that  
 * identifies the component within a parent component's template
 * 
 * - Always export the component because you will always import it 
 *   elsewhere
 */
@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>id: </label>{{hero.id}}
                <label>name: </label><input [(ngModel)]="hero.name" placeholder="name">{{hero.name}}
            </div>
        </div> 
    `
}) 
export class HeroDetailComponent {
    /**
     * Declare that hero is an input property  by preceding it with the 
     * @Input decorator imported above
     */
    @Input() hero: Hero;
}