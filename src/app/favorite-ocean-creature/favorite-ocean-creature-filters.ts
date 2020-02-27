import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface FavoriteOceanCreatureFilters extends BaseHarnessFilters {
  readonly text?: string | RegExp;
}
