import { Component, OnInit } from '@angular/core';
import { EventService} from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = []
  // tslint:disable-next-line:variable-name
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => console.log(err)
      );
  }

}
