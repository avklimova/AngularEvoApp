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
    // Устанавливаем интервал для изменения текста каждые 2 секунды
    this.intervalId = setInterval(() => {
      this.text = this.text === "SecondEvoApp" ? "second-component works!" : "SecondEvoApp";
    }, 2000);
  }
}