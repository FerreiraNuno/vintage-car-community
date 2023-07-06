import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  Cars,
  StorageBin,  
} from 'src/app/shared/models/response.model';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bins',
  templateUrl: './search-bins.component.html',
  styleUrls: ['./search-bins.component.scss'],
})
export class SearchBinsComponent implements OnInit {
  public searchForm!: UntypedFormGroup;
  public searched: boolean = false;
  public searchFormSubmitted: boolean = false;
  
  public cars: Cars[] = [
    {
      id: 1,
      name: 'Toyota',
      make: 'Corrola',
      year: '2011',
      readyForPickup: false,
    },
    {
      id: 2,
      name: 'Mazda',
      make: 'Corrola',
      year: '2011',
      readyForPickup: true,
    },
    {
      id: 3,
      name: 'Lexus',
      make: 'Corrola',
      year: '2011',
      readyForPickup: false,
    },
    {
      id: 4,
      name: 'Hyundai',
      make: 'Corrola',
      year: '2011',
      readyForPickup: false,
    },
    {
      id: 5,
      name: 'Suzuki',
      make: 'Corrola',
      year: '2011',
      readyForPickup: true,
    },
    {
      id: 1,
      name: 'Mitsubushi',
      make: 'Corrola',
      year: '2011',
      readyForPickup: false,
    },
  ];
  
  public storageBins: StorageBin[] = [];
  // private sub: Subscription = new Subscription();
  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.initSearchForm();
  }

  public initSearchForm(): void {
    this.searchForm = this.fb.group({
      car: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
 

 
  public submit() {
    
    setTimeout(() => {
      this.searched = true;
      this.getAllStorageBins();
    }, 1000);
  }

  public getAllStorageBins(): void {
  
    this.storageBins = [
      {
        id: 1,
        name: 'Lore ipsum',
        location: {
          houseNumber: 5,
          streetName: 'Sefrd Jumns',
          city: 'Hansberger',
          state: 'Berlin',
          country: 'Germany',
        },
        serviceTime: {
          start: '12:30PM',
          end: '4:30PM',
        },
      },
      {
        id: 2,
        name: 'Dens Lorem',
        location: {
          houseNumber: 7,
          streetName: 'Sefrd Jumns',
          city: 'Hansberger',
          state: 'Vienna',
          country: 'Germany',
        },
        serviceTime: {
          start: '2:30PM',
          end: '4:30PM',
        },
      },
      {
        id: 3,
        name: 'Gens Maya',
        location: {
          houseNumber: 9,
          streetName: 'Sefrd Jumns',
          city: 'Hansberger',
          state: 'Bremen',
          country: 'Germany',
        },
        serviceTime: {
          start: '1:30PM',
          end: '4:30PM',
        },
      },
      {
        id: 4,
        name: 'Reins Mayer',
        location: {
          houseNumber: 5,
          streetName: 'Sefrd Jumns',
          city: 'Hansberger',
          state: 'Dortmund',
          country: 'Germany',
        },
        serviceTime: {
          start: '12:30PM',
          end: '4:30PM',
        },
      },
      {
        id: 5,
        name: 'Temsnsa Ushdnbbd',
        location: {
          houseNumber: 7,
          streetName: 'Sefrd Jumns',
          city: 'Hansberger',
          state: 'Munich',
          country: 'Germany',
        },
        serviceTime: {
          start: '2:30PM',
          end: '4:30PM',
        },
      },
      {
        id: 6,
        name: 'Marina Herns',
        location: {
          houseNumber: 9,
          streetName: 'Sefrd Jumns',
          city: 'Hansberger',
          state: 'Leipzig',
          country: 'Germany',
        },
        serviceTime: {
          start: '1:30PM',
          end: '4:30PM',
        },
      },
    ];
  }


 
}
