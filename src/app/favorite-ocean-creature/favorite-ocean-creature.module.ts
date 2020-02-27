import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  FavoriteOceanCreaturePickerModule,
} from './favorite-ocean-creature-picker/favorite-ocean-creature-picker.module';
import {
  FavoriteOceanCreatureComponent,
} from './favorite-ocean-creature.component';

@NgModule({
  declarations: [FavoriteOceanCreatureComponent],
  exports: [FavoriteOceanCreatureComponent],
  imports: [
    CommonModule,
    FavoriteOceanCreaturePickerModule,
  ],
})
export class FavoriteOceanCreatureModule {}
