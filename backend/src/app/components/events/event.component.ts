import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import {
  View,
  EventSettingsModel,
  PopupOpenEventArgs,
} from '@syncfusion/ej2-schedule';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  icons={faPen, faTrash};
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  @ViewChild('addButtonObj', { static: true })
  public addButtonObj: ButtonComponent;
  @ViewChild('editButtonObj', { static: true })
  public editButtonObj: ButtonComponent;
  public data: object[] = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(2021, 8, 15, 10, 0),
      EndTime: new Date(2021, 8, 15, 12, 30),
      // IsAllDay: true,
      Status: 'Completed',
      Priority: 'High',
    },
  ];
  public setView: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
  public setDate: Date = new Date(2021, 8, 22);
  public eventObject: EventSettingsModel = {
    dataSource: this.data,
    //   [{
    //   EventTitle: "",
    //   EventStart: new Date(2021, 8, 22, 4, 0),
    //   EventEnd: new Date(2021, 8,25, 6, 0),
    //   // IsBlock: true,
    //   // RecurrenceRule: "FREQ=DAILY; INTERVAL=1; COUNT=10",
    //   // IsAllDay: true
    // }],
    fields: {
      subject: {
        name: 'EventTitle',
        default: 'Hello Enviroment',
        title: 'Enter Title',
      },
      startTime: { name: 'EventStart' },
      endTime: { name: 'EventEnd' },
    },
  };
  add(): void {
    let Data: Object[] = [{
      Id: 2,
      Subject: 'Meeting',
      StartTime: new Date(2021, 8, 15, 10, 0),
      EndTime: new Date(2021, 8, 15, 12, 30),
      IsAllDay: true,
      Status: 'Completed',
      Priority: 'High',
    },{
      Id: 3,
      Subject: 'Meeting1',
      StartTime: new Date(2021, 8, 18, 10, 0),
      EndTime: new Date(2021, 8, 18, 12, 30),
      IsAllDay: true,
      Status: 'Completed',
      Priority: 'High',
    }];
    this.scheduleObj.addEvent(Data);
    this.addButtonObj.element.setAttribute('disabled','true');
  }
  edit(): void {
      let data: { [key: string]: Object; } = {
        Id: 3,
        Subject: 'Meeting1 edited',
        StartTime: new Date(2021, 8, 18, 10, 0),
        EndTime: new Date(2021, 8, 18, 12, 30),
        // IsAllDay: true,
        Status: 'Completed',
        Priority: 'High',
      };
      this.scheduleObj.saveEvent(data);
      this.editButtonObj.element.setAttribute('disabled','true');
  }
  // onPopupOpen(args: PopupOpenEventArgs): void {
  //   if (args.type === 'Editor') {
  //     // Create required custom elements in initial time
  //     if (!args.element.querySelector('.custom-field-row')) {
  //       let row: HTMLElement = createElement('div', {
  //         className: 'custom-field-row',
  //       });
  //       let formElement: HTMLElement = <HTMLElement>(
  //         args.element.querySelector('.e-schedule-form')
  //       );
  //       formElement.firstChild.insertBefore(
  //         row,
  //         args.element.querySelector('.e-title-location-row')
  //       );
  //       let container: HTMLElement = createElement('div', {
  //         className: 'custom-field-container',
  //       });
  //       let inputEle: HTMLInputElement = createElement('input', {
  //         className: 'e-field',
  //         attrs: { name: 'EventType' },
  //       }) as HTMLInputElement;
  //       container.appendChild(inputEle);
  //       row.appendChild(container);
  //       let drowDownList: DropDownList = new DropDownList({
  //         dataSource: [
  //           { text: 'Public Event', value: 'public-event' },
  //           { text: 'Maintenance', value: 'maintenance' },
  //           { text: 'Commercial Event', value: 'commercial-event' },
  //           { text: 'Family Event', value: 'family-event' },
  //         ],
  //         fields: { text: 'text', value: 'value' },
  //         value: (args.data as { [key: string]: Object }).EventType as string,
  //         floatLabelType: 'Always',
  //         placeholder: 'Event Type',
  //       });
  //       drowDownList.appendTo(inputEle);
  //       inputEle.setAttribute('name', 'EventType');
  //     }
  //   }
  // }

  constructor() {}

  ngOnInit() {}

  public events = [{
    image: 'assets/images/blog/50.jpg',
    date: 'September 24, 2021',
    title: 'ZEIT CONTEMPORARY ART',
    by: 'Marvel Arts Museum',
    description: 'ONLINE VIEWING ROOM | FROM PARIS TO NEW YORK: TRANSFORMATIONS IN PRINTMAKING',
    location: 'New York, NY',
    category: 'Exhibition'
  }, {
    image: 'assets/images/blog/51.jpg',
    date: 'Oct 21, 2021 - Dec 30, 2021',
    title: 'THE WORLD WITHIN: PHOTOGRAPHY AND INTERIORITY',
    by: 'Zeit Contemporary Art',
    description: 'Zeit Contemporary Art is pleased to announce The World Within: Photography and Interiority, on view through December 30, 2021.',
    location: 'Washinton, D.C.',
    category: 'Digital Conference'
  }];
}
