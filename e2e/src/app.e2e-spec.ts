import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { browser, logging } from 'protractor';

import {
  FavoriteOceanCreatureHarness,
} from '../../src/app/favorite-ocean-creature/favorite-ocean-creature.harness';

describe('Favorite ocean creature app', () => {
  beforeEach(async () => {
    browser.get('/');
    const harnessLoader = ProtractorHarnessEnvironment.loader();
    harness = await harnessLoader.getHarness(FavoriteOceanCreatureHarness);
  });

  let harness: FavoriteOceanCreatureHarness;

  it('put your favorite ocean creature in a sentence', async () => {
    const octopus = 'Octopus';

    await harness.pickOption({ text: octopus });

    const text = await harness.getText();
    expect(text).toBe(`My favorite ocean creature is ${octopus}`);

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
