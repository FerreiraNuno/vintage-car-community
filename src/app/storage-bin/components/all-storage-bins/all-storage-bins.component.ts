import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import {
} from 'src/app/shared/models/response.model';
import { StorageBin } from '../../models/storage-bin.model';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-all-storage-bins',
  templateUrl: './all-storage-bins.component.html',
  styleUrls: ['./all-storage-bins.component.scss'],
})
export class AllStorageBinsComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public storageBins: StorageBin[] = [];
  public binForm!: UntypedFormGroup;


  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getAllStorageBins();
    this.initBinForm();
  }

  public initBinForm(): void {
    this.binForm = this.fb.group({
      name: ['', Validators.required],
      dimension: this.fb.group({
        width: ['', Validators.required],
        height: ['', Validators.required],
      }),
      location: this.fb.group({
        houseNumber: ['', Validators.required],
        streetName: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
      }),
      serviceTime: this.fb.group({
        start: ['', Validators.required],
        end: ['', Validators.required],
      }),
    });
  }

  public submit() {
    
  }



  public getAllStorageBins(): void {
    
    this.storageBins = [
      {
        id: 1,
        name: 'Lore ipsum',
        dimension: { width: 45, height: 75 },
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
        dimension: { width: 35, height: 55 },
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
        dimension: { width: 45, height: 75 },
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
        dimension: { width: 45, height: 75 },
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
        dimension: { width: 35, height: 55 },
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
        dimension: { width: 45, height: 75 },
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
      {
        id: 7,
        dimension: { width: 45, height: 78 },
        location: {
          houseNumber: 5,
          streetName: 'jshjdjh',
          city: 'jhjhjhjh',
          state: 'jhjhdjhjh',
          country: 'jhjshdjdshsd',
        },
        name: 'Jhdjhjhd',
        serviceTime: { start: '2023-06-29T19:54', end: '2023-06-29T22:55' },
      },
    ];
  }

 
 
  editStorage(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.activeRoute });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
