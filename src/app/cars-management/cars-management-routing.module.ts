import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableCarsComponent } from './components/available-cars/available-cars.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';

const routes: Routes = [
  { path: '', component: AvailableCarsComponent },
  { path: 'edit/:id', component: EditCarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsManagementRoutingModule {}
