import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipeEvoApp';
  array_cars = [
    {
      name: "Volvo"
    },
    {
      name: "Toyota"
    },
    {
      name: "BMW"
    }
  ];

  date_now = new Date();

  current_number = 10;
}
