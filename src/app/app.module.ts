import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  FavoriteOceanCreatureModule,
} from './favorite-ocean-creature/favorite-ocean-creature.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    FavoriteOceanCreatureModule,
  ],
})
export class AppModule {}
