import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements AfterViewInit {
  text = "SecondEvoApp";
  private intervalId: any;

  ngAfterViewInit(): void {
      this.intervalId = setInterval(() => {
      this.text = this.text === "SecondEvoApp" ? "second-component works!" : "SecondEvoApp";
    }, 2000);
  }
}