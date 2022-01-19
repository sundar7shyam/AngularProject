import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorAppComponent } from './doctor-app/doctor-app.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';


const routes: Routes = [
  {path : 'doctors', component : DoctorAppComponent},
  {path : 'create-doctor', component : CreateDoctorComponent},
  {path : '', redirectTo: 'doctors', pathMatch: 'full'},
  {path : 'patients', component : PatientListComponent},
  {path : 'create-patient', component : CreatePatientComponent},
  {path : '', redirectTo: 'patients', pathMatch: 'full'},
  {path : 'update-patient/:id', component: UpdatePatientComponent},
  {path : 'doctor-details/:id', component: DoctorDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
