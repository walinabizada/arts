import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { eventList } from '../../../shared/tables/event-list';
@Component({
  selector: 'app-event-list',
  templateUrl: './event.list.component.html',
  styleUrls: ['./event.list.component.scss']
})
export class EventListComponent implements OnInit {
  public events = [];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor() {
    this.events = eventList.events;
  }

  ngOnInit(): void {
  }
}
