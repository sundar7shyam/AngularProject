import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient} from  './patient'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL ="http://localhost:8082/patient/patients";

  constructor(private httpClient : HttpClient) { }

  getPatientsList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  createPatient(patient : Patient) : Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, patient);
  }

  getPatientById(id : number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
  }

  updatePatient(id : number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
