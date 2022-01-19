import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {


  id: any;
  patient! : Patient;
  constructor(private route: ActivatedRoute,
    private patientService : PatientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patient = new Patient();
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    })
  }

}
