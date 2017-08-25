import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import { NgModel} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private http: Http) {}

  apiKey: string = '273de801e2a351ca9ec7f763870fe685';
  cityName: string = 'Singapore';
  unit: string = 'metric';

  searchCity() {

    this.http.get('api.openweathermap.org/data/2.5/weather',
      {params:  {appid: this.apiKey, q: this.cityName, units: this.unit}})
      .subscribe(
        (res: Response) => {
          const weatherCity = res.json();
          console.log(weatherCity);
        });
  }
}
