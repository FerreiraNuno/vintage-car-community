import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Cars } from './models/cars.model';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss'],
})
export class AllCarsComponent implements OnInit, OnDestroy {
  public searchForm!: UntypedFormGroup;
  public searched: boolean = false;
  public searchFormSubmitted: boolean = false;
  private sub: Subscription = new Subscription();
  public cars: Cars[] = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    // private location: Location,
    private fb: UntypedFormBuilder,
  ) {}

  ngOnInit(): void {
    this.getAllParkingSpace();
    this.initSearchForm();
  }

  public initSearchForm(): void {
    this.searchForm = this.fb.group({
      searchType: ['plate', Validators.required],
      term: ['', Validators.required],
    });
  }


  public submit() {
    
    this.searched=true;



  }




  public getAllParkingSpace(
   
  ): void {
    

   
    this.cars = [
      {
        id: 1,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        readyForPickup: false,
      },
      {
        id: 2,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        readyForPickup: true,
      },
      {
        id: 3,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        readyForPickup: false,
      },
      {
        id: 4,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        readyForPickup: false,
      },
      {
        id: 5,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        readyForPickup: true,
      },
      {
        id: 1,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        readyForPickup: false,
      },
      {
        id: 6,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        readyForPickup: true,
      },
      {
        id: 7,
        name: 'Toyota',
        make: 'Corrola',
        year: '2011',
        readyForPickup: true,
      },
    ];
  }

  public addNewStorageBin() {
    this.router.navigate(['add'], { relativeTo: this.activeRoute });
  }


  editStorage(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.activeRoute });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
