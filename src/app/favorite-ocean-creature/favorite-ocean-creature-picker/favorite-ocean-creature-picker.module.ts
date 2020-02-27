import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import {
  FavoriteOceanCreaturePickerComponent,
} from './favorite-ocean-creature-picker.component';

@NgModule({
  declarations: [FavoriteOceanCreaturePickerComponent],
  exports: [FavoriteOceanCreaturePickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class FavoriteOceanCreaturePickerModule {}
