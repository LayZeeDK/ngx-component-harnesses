import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { SelectOption, SelectOptions } from '../select-option';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-favorite-ocean-creature-picker',
  styles: [':host { display: inline-block; }'],
  templateUrl: './favorite-ocean-creature-picker.component.html',
})
export class FavoriteOceanCreaturePickerComponent implements OnDestroy, OnInit {
  private controlSubscription: Subscription;

  @Input()
  options: SelectOptions = [];
  @Input()
  set value(value: SelectOption | undefined) {
    if (value == null) {
      value = undefined;
    }

    this.control.setValue(value);
  }
  @Output()
  valueChange = new EventEmitter<SelectOption | undefined>();

  control = new FormControl();

  ngOnInit(): void {
    this.bindEvents();
  }

  ngOnDestroy(): void {
    this.unbindEvents();
  }

  private bindEvents(): void {
    this.controlSubscription = this.control.valueChanges.subscribe(value =>
      this.valueChange.next(value));
  }

  private unbindEvents(): void {
    this.controlSubscription.unsubscribe();
  }
}
