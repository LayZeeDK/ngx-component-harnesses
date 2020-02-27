import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { oceanCreatures } from './ocean-creatures';
import { SelectOption } from './select-option';

@Component({
  selector: 'app-favorite-ocean-creature',
  styles: [':host { display: block; }'],
  templateUrl: './favorite-ocean-creature.component.html',
})
export class FavoriteOceanCreatureComponent {
  private favoriteOceanCreatureSubject: BehaviorSubject<SelectOption | undefined>;

  favoriteOceanCreature$: Observable<SelectOption | undefined>
  oceanCreatures = oceanCreatures;

  constructor() {
    const defaultFavorite = this.oceanCreatures.find(x => x.id === 'manta-ray');
    this.favoriteOceanCreatureSubject = new BehaviorSubject(defaultFavorite);
    this.favoriteOceanCreature$ = this.favoriteOceanCreatureSubject.asObservable();
  }

  onFavoriteOceanCreaturePicked(oceanCreature: SelectOption): void {
    this.favoriteOceanCreatureSubject.next(oceanCreature);
  }
}
