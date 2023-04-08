import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Doctor } from './admin/add-doctor/doctor';
import { Nurse } from './admin/add-nurse/nurse';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http : HttpClient){}
  isLoggedIn = false
  login(email : string){
    if(email === 'admin.com' || 'doctor.com' || 'nurse.com'){
      this.isLoggedIn = true
      //u can add specific routes here
    }
    return this.isLoggedIn
  }

  getPatientByEmail(email : string | null):Observable<PatientInfo[]> {
    return this.http.get<PatientInfo[]>(`/api/PatientInfo/GetPatientInfobyemail/${email}`)
  }
  getDoctorByEmail(email:string){
    return this.http.get<Doctor>(`/api/Doctor/GetByEmail?e=${email}`)
  }

  getNurseByEmail(email:string){
    return this.http.get<Nurse>(`/api/Nurse/getByEmail?e=${email}`)
  }
}


export interface PatientInfo{
    patId : Guid,
    fullname : string,
    age : number,
    gender : string,
    email : string,
    pasword : string,
    phone : number,
    adressLine : string,
    city : string,
    state : string,
    created : string
}
