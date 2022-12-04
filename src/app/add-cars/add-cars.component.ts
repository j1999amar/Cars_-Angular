import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.css'],
})
export class AddCarsComponent {
  constructor(private api: ApiService, private route: Router) {}
  carModel = '';
  carPrice = '';
  carImage = '';
  readValue = () => {
    const carsData = {
      carModel: this.carModel,
      carPrice: this.carPrice,
      carImage: this.carImage,
    };
    this.api.AddCarsData(carsData).subscribe((response: any) => {
      
      this.route.navigate(['/viewCars']);
    });
  };
}
