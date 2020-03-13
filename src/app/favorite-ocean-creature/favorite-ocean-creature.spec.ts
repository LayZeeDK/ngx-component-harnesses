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
    TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [NoopAnimationsModule, FavoriteOceanCreatureModule],
    });

    const fixture = TestBed.createComponent(TestHostComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    harness = await loader.getHarness(FavoriteOceanCreatureHarness);
  });

  it('manta ray is the default favorite ocean creature', async () => {
    const mantaRay = 'Manta ray';
    const pickedOceanCreature = await harness.getFavoriteOceanCreature();

    expect(pickedOceanCreature).toBe(mantaRay);
  });

  it('show awesome ocean creatures', async () => {
    const blueWhale = 'Blue whale';
    const options = await harness.getOptions();

    expect(options).toContain(blueWhale);
  });

  it('pick your favorite ocean creature', async () => {
    const greatWhiteShark = 'Great white shark';

    await harness.pickOption({ text: greatWhiteShark });

    const pickedOceanCreature = await harness.getFavoriteOceanCreature();
    expect(pickedOceanCreature).toBe(greatWhiteShark);
  });

  it('put your favorite ocean creature in a sentence', async () => {
    const octopus = 'Octopus';

    await harness.pickOption({ text: octopus });

    const text = await harness.getText();
    expect(text).toBe(`My favorite ocean creature is ${octopus}`);
  });
});
