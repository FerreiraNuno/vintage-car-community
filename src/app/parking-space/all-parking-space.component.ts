import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingSpace } from './models/parking-space.model';

@Component({
  selector: 'app-all-parking-space',
  templateUrl: './all-parking-space.component.html',
  styleUrls: ['./all-parking-space.component.scss'],
})
export class AllParkingSpaceComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public parkingSpaces: ParkingSpace[] = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getAllParkingSpace();
  }

  public getAllParkingSpace(
    ): void {
    
    this.parkingSpaces = [
      {
        id: 1,
        name: 'Jane Doe',
        car: 'Lexus',
        date: '29/06/2023',
        proposedTime: '3:00PM',
        status: 1,
      },
      {
        id: 1,
        name: 'Mary Doe',
        car: 'Lexus',
        date: '29/06/2023',
        proposedTime: '3:00PM',
        status: 2,
      },
      {
        id: 1,
        name: 'Ron Doe',
        car: 'Lexus',
        date: '29/06/2023',
        proposedTime: '3:00PM',
        status: 0,
      },
      {
        id: 1,
        name: 'Ann Doe',
        car: 'Lexus',
        date: '29/06/2023',
        proposedTime: '3:00PM',
        status: 1,
      },
      {
        id: 1,
        name: 'Eve Doe',
        car: 'Lexus',
        date: '29/06/2023',
        proposedTime: '3:00PM',
        status: 2,
      },
      {
        id: 1,
        name: 'Max Doe',
        car: 'Lexus',
        date: '29/06/2023',
        proposedTime: '3:00PM',
        status: 0,
      },
      {
        id: 1,
        name: 'John Doe',
        car: 'Lexus',
        date: '29/06/2023',
        proposedTime: '3:00PM',
        status: 0,
      },
    ];
  }


 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
