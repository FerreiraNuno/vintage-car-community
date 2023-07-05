import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  Cars,
} from 'src/app/shared/models/response.model';

@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.component.html',
  styleUrls: ['./available-cars.component.scss'],
})
export class AvailableCarsComponent implements OnInit, OnDestroy {
  public searchForm!: UntypedFormGroup;
  private sub: Subscription = new Subscription();
  public cars: Cars[] = [];
  public carForm!: UntypedFormGroup;
  public carFormSubmitted: boolean = false;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: UntypedFormBuilder,
  ) {}

  ngOnInit(): void {
    this.getAllParkingSpace();
    this.initSearchForm();
    this.initBinForm();
  }

  public initBinForm(): void {
    this.carForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      make: ['', Validators.required],
      year: ['', Validators.required],
      readyForPickup: [true, Validators.required],
    });
  }

  public submitAdd() {
    
  }
 
  public initSearchForm(): void {
    this.searchForm = this.fb.group({
      searchType: ['plate', Validators.required],
      term: ['', Validators.required],
    });
  }
 

  
  public submit() {
   
  }



 
  public getAllParkingSpace(
   ): void {
    
    this.cars = [
      {
        id: 1,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        location: 'Berlin',
        readyForPickup: false,
      },
      {
        id: 2,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        readyForPickup: true,
        location: 'Berlin',
      },
      {
        id: 3,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        location: 'Berlin',
        readyForPickup: false,
      },
      {
        id: 4,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        location: 'Berlin',
        readyForPickup: false,
      },
      {
        id: 5,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        location: 'Berlin',
        readyForPickup: true,
      },
      {
        id: 1,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        location: 'Berlin',
        readyForPickup: false,
      },
      {
        id: 6,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        location: 'Berlin',
        readyForPickup: true,
      },
      {
        id: 7,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        location: 'Berlin',
        readyForPickup: true,
      },
    ];
  }

  public addNewCar() {
    this.router.navigate(['add'], { relativeTo: this.activeRoute });
  }


  editCar(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.activeRoute });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
