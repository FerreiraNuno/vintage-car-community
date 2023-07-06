import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { StorageBin } from '../shared/models/response.model';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.scss'],
})
export class MakeAppointmentComponent implements OnInit {
  formSubmitted: boolean = false;
  apptForm!: UntypedFormGroup;
  data: StorageBin = {
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
  };
  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    
    this.apptForm = this.fb.group({
      date: ['', Validators.required],
    });
  }
  public submit() {
  
   
  }

  
}
