import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { StorageBin } from '../../models/storage-bin.model';

@Component({
  selector: 'app-edit-storage-bin',
  templateUrl: './edit-storage-bin.component.html',
  styleUrls: ['./edit-storage-bin.component.scss'],
})
export class EditStorageBinComponent implements OnInit {
  public binForm!: UntypedFormGroup;
  
  public storageBinItem: StorageBin = {
    id: 6,
    name: 'Marina Herns',
    dimension: { width: 45, height: 75 },
    location: {
      houseNumber: 9,
      streetName: 'Sefrd Jumns',
      city: 'Hansberger',
      state: 'Leipzig',
      country: 'Germany',
    },
    serviceTime: { start: '2023-06-29T19:54', end: '2023-06-29T22:55' },
  };
  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.initBinForm();
  }

 

  public initBinForm(): void {
    this.binForm = this.fb.group({
      name: [this.storageBinItem.name, Validators.required],
      dimension: this.fb.group({
        width: [this.storageBinItem.dimension.width, Validators.required],
        height: [this.storageBinItem.dimension.height, Validators.required],
      }),
      location: this.fb.group({
        houseNumber: [
          this.storageBinItem.location.houseNumber,
          Validators.required,
        ],
        streetName: [
          this.storageBinItem.location.streetName,
          Validators.required,
        ],
        city: [this.storageBinItem.location.city, Validators.required],
        state: [this.storageBinItem.location.state, Validators.required],
        country: [this.storageBinItem.location.country, Validators.required],
      }),
      serviceTime: this.fb.group({
        start: [this.storageBinItem.serviceTime.start, Validators.required],
        end: [this.storageBinItem.serviceTime.end, Validators.required],
      }),
    });
  }

  public submit() {
    
  }
 
}
