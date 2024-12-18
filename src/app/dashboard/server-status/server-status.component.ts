import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    id: "status"
  }
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {

  }

  ngOnInit(): void {
    console.log("On Init");
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.75) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit(): void {
    console.log("After view init");
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
