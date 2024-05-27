import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-main-setting-page',
  templateUrl: './main-setting-page.component.html',
  styleUrls: ['./main-setting-page.component.css']
})
export class MainSettingPageComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  selected = new FormControl(1);
}
