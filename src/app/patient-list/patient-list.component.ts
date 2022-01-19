import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients! : Patient[];

  constructor(private patientService : PatientService,
    private router : Router) { }

  ngOnInit(): void {
   this.getPatients();
  }

  private getPatients(){
    this.patientService.getPatientsList().subscribe(data => {
      this.patients = data;
    });
  }

  doctorDetails(id: number){
    this.router.navigate(['doctor-details',id]);
  }

  updatePatient(id : number){
    this.patientService.updatePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    })
  }

}
