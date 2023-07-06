import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  Appointments,
} from '../shared/models/response.model';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  
  // The model for the data structure of Appointments you will find it in shared/models/response.model.ts , and you will find there all models so you can change it as you want to fit you DB

  public allAppointments: Appointments[] = [];


  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllAppointments();
  }

  public getAllAppointments(): void {
   // Here you can fetch all appointments and just edit the structure in the html code if it's less or more information.
   //in html there is loop which will print all values of it.
    this.allAppointments = [
      {
        id: 1,
        name: 'Jane Doe',
        car: {
          id: 7,
          name: 'Toyota',
          make: 'Corrola',
          year: '2011',
          location: 'Berlin',
          readyForPickup: true,
        },
        date: '29/06/2023',
        bin: {
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
        status: 0,
      },
      {
        id: 2,
        name: 'Mary Doe',
        car: {
          id: 7,
          name: 'Toyota',
          make: 'Corrola',
          year: '2011',
          location: 'Berlin',
          readyForPickup: true,
        },
        date: '29/06/2023',
        bin: {
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
        status: 0,
      },
      {
        id: 3,
        name: 'John Doe',
        car: {
          id: 7,
          name: 'Toyota',
          make: 'Corrola',
          year: '2011',
          location: 'Berlin',
          readyForPickup: true,
        },
        date: '29/06/2023',
        bin: {
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
        status: 1,
      },
      {
        id: 4,
        name: 'Lara Doe',
        car: {
          id: 7,
          name: 'Toyota',
          make: 'Corrola',
          year: '2011',
          location: 'Berlin',
          readyForPickup: true,
        },
        date: '29/06/2023',
        bin: {
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
        status: 2,
      },
      {
        id: 5,
        name: 'Max Doe',
        car: {
          id: 7,
          name: 'Toyota',
          make: 'Corrola',
          year: '2011',
          location: 'Berlin',
          readyForPickup: true,
        },
        date: '29/06/2023',
        bin: {
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
        status: 1,
      },
      {
        id: 6,
        name: 'Harry Doe',
        car: {
          id: 7,
          name: 'Toyota',
          make: 'Corrola',
          year: '2011',
          location: 'Berlin',
          readyForPickup: true,
        },
        date: '29/06/2023',
        bin: {
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
        status: 0,
      },
    ];
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
