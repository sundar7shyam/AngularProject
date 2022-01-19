import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8082/doctor/doctors";
  constructor(private httpClient : HttpClient) { }

  getDoctorsList() : Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }

  createDoctor(doctor : Doctor) : Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, doctor);
  }
  

}
