import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  FavoriteOceanCreatureHarness,
} from './favorite-ocean-creature.harness';
import { FavoriteOceanCreatureModule } from './favorite-ocean-creature.module';

describe('Favorite ocean creature', () => {
  @Component({
    template: '<app-favorite-ocean-creature></app-favorite-ocean-creature>',
  })
  class TestHostComponent {}

  let harness: FavoriteOceanCreatureHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [NoopAnimationsModule, FavoriteOceanCreatureModule],
    }).compileComponents();

    const fixture = TestBed.createComponent(TestHostComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    harness = await loader.getHarness(FavoriteOceanCreatureHarness);
  });

  it('pick your favorite ocean creature', async () => {
    const greatWhiteShark = 'Great white shark';
    await harness.pickOption({ text: greatWhiteShark });

    const pickedOceanCreature = await harness.getFavoriteOceanCreature();
    expect(pickedOceanCreature).toBe(greatWhiteShark);
  });
});
