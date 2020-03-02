import { Component, OnInit } from '@angular/core';
import { EventService} from '../event.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = []

  // tslint:disable-next-line:variable-name
  constructor(private _evntService: EventService) { }

  ngOnInit() {
    this._evntService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      );
  }

}
