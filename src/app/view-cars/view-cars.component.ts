import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.css']
})
export class ViewCarsComponent {
  data:any=[]
  constructor(private api:ApiService){
    this.api.fetchCarData().subscribe(
      (response:any)=>{
        this.data=response
      }
    )
  }

}
