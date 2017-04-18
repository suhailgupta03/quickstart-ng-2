import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

/**
 * - 'imports' contains the list of external modules that the app uses
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        /**
         * The router matches this router's path to the URL
         * in the browser address bar
         */
        path: 'heroes',
        /**
         * The component that the router should create when navigating 
         * to this route
         */
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  /**
   * A component must be declaredin the module before other components can 
   * reference it.
   */
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  /**
   * To teach the injector how to make a HeroService
   * add to the component metadata
   * - The provider array tells angular to create a fresh instance of 
   * HeroService when it creates an AppComponent. The AppComponent as 
   * well as its child component can use the service to get the hero data
   */
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
