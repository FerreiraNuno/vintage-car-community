import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BookedService } from './models/booked-service.model';

@Component({
  selector: 'app-all-booked-services',
  templateUrl: './all-booked-services.component.html',
  styleUrls: ['./all-booked-services.component.scss'],
})
export class AllBookedServicesComponent implements OnInit, OnDestroy {
  
  private sub: Subscription = new Subscription();
  // you will find the data structure for it : booked-services\models
  public services: BookedService[] = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getAllParkingSpace();
    
  }







  public getAllParkingSpace(): void {
    
    this.services = [
      {
        id: 1,
        name: 'Jane Doe',
        dateListed: '29/06/2023',
        expiryDate: '29/06/2023',
        status: 1,
      },
      {
        id: 2,
        name: 'Jane Doe',
        dateListed: '29/06/2023',
        expiryDate: '29/06/2023',
        status: 1,
      },
      {
        id: 3,
        name: 'Jane Doe',
        dateListed: '29/06/2023',
        expiryDate: '29/06/2023',
        status: 1,
      },
      {
        id: 4,
        name: 'Jane Doe',
        dateListed: '29/06/2023',
        expiryDate: '29/06/2023',
        status: 1,
      },
      {
        id: 5,
        name: 'Jane Doe',
        dateListed: '29/06/2023',
        expiryDate: '29/06/2023',
        status: 1,
      },
      {
        id: 6,
        name: 'Jane Doe',
        dateListed: '29/06/2023',
        expiryDate: '29/06/2023',
        status: 1,
      },
    ];
  }

 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
