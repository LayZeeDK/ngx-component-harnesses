import { AsyncFactoryFn, ComponentHarness } from '@angular/cdk/testing';
import { MatSelectHarness } from '@angular/material/select/testing';

import {
  FavoriteOceanCreatureFilters,
} from './favorite-ocean-creature-filters';

export class FavoriteOceanCreatureHarness extends ComponentHarness {
  static hostSelector = 'app-favorite-ocean-creature';

  protected getMatSelect: AsyncFactoryFn<MatSelectHarness> =
    this.locatorFor(MatSelectHarness);

  async getFavoriteOceanCreature(): Promise<string> {
    const select = await this.getMatSelect();

    return select.getValueText();
  }

  async getOptions(): Promise<ReadonlyArray<string>> {
    const select = await this.getMatSelect();
    await select.open();
    const options = await select.getOptions();
    const optionTexts = options.map(option => option.getText());

    return Promise.all(optionTexts);
  }

  async pickOption(filter: FavoriteOceanCreatureFilters): Promise<void> {
    const select = await this.getMatSelect();

    return select.clickOptions({ text: filter.text });
  }
}
