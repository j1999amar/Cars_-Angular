import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {  }
  AddCarsData=(addCarsData:any)=>{
    return this.http.post('https://638c306ad2fc4a058a531f7c.mockapi.io/addCars',addCarsData)
  }
  fetchCarData=()=>{
    return this.http.get('https://638c306ad2fc4a058a531f7c.mockapi.io/addCars')
  }

}
