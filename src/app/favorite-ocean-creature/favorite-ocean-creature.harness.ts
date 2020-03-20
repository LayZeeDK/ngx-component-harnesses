import { AsyncFactoryFn, ComponentHarness } from '@angular/cdk/testing';
import { MatSelectHarness } from '@angular/material/select/testing';

import {
  FavoriteOceanCreatureFilters,
} from './favorite-ocean-creature-filters';

export class FavoriteOceanCreatureHarness extends ComponentHarness {
  static hostSelector = 'app-favorite-ocean-creature';

  protected getDropDown: AsyncFactoryFn<MatSelectHarness> =
    this.locatorFor(MatSelectHarness);

  async getFavoriteOceanCreature(): Promise<string> {
    const select = await this.getDropDown();

    return select.getValueText();
  }

  async getOptions(): Promise<ReadonlyArray<string>> {
    const select = await this.getDropDown();
    await select.open();
    const options = await select.getOptions();
    const optionTexts = options.map(option => option.getText());

    return Promise.all(optionTexts);
  }

  async getText(): Promise<string> {
    const host = await this.host();
    const text = await host.text();
    const label = 'Pick your favorite';

    return text.replace(label, '').trim();
  }

  async pickOption(filter: FavoriteOceanCreatureFilters): Promise<void> {
    const select = await this.getDropDown();

    return select.clickOptions({ text: filter.text });
  }
}
