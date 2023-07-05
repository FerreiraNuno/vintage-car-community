import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { Cars } from 'src/app/shared/models/response.model';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss'],
})
export class EditCarComponent implements OnInit {
  public carForm!: UntypedFormGroup;
  public carFormSubmitted: boolean = false;

  public carItem: Cars = {
    id: 7,
    location: 'Berlin',
    name: 'Toyota',
    make: 'Avalon',
    year: '2020',
    readyForPickup: true,
  };
  constructor(private fb: UntypedFormBuilder, private location: Location) {}

  ngOnInit() {
    this.initBinForm();
  }

 

  public initBinForm(): void {
    this.carForm = this.fb.group({
      name: [this.carItem.name, Validators.required],
      location: [this.carItem.location, Validators.required],
      make: [this.carItem.make, Validators.required],
      year: [this.carItem.year, Validators.required],
      readyForPickup: [true, Validators.required],
    });
  }

  public submit() {
    
  }
 
}
