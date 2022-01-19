import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service'

@Component({
  selector: 'app-doctor-app',
  templateUrl: './doctor-app.component.html',
  styleUrls: ['./doctor-app.component.css']
})
export class DoctorAppComponent implements OnInit {

  doctors!: Doctor[];

  constructor(private doctorService : DoctorService) { }

  ngOnInit(): void {
   this.getDoctors();
  }


  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    });
  }
}
