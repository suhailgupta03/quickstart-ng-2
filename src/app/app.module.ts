import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

/**
 * - 'imports' contains the list of external modules that the app uses
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  /**
   * A component must be declaredin the module before other components can 
   * reference it.
   */
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
