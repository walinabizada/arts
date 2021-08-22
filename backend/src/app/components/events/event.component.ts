import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { View, EventSettingsModel, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @ViewChild("scheduleObj")
  public scheduleObj: ScheduleComponent;
  public data: object[] = [{
    Id: 2,
    Subject: 'Meeting',
    StartTime: new Date(2021, 8, 15, 10, 0),
    EndTime: new Date(2021, 8, 15, 12, 30),
    IsAllDay: true,
    Status: 'Completed',
    Priority: 'High'
}];
  public setView: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
  public setDate: Date = new Date(2021, 8, 22);
  public eventObject: EventSettingsModel = { dataSource:  this.data,
  //   [{
  //   EventTitle: "",
  //   EventStart: new Date(2021, 8, 22, 4, 0),
  //   EventEnd: new Date(2021, 8,25, 6, 0),
  //   // IsBlock: true,
  //   // RecurrenceRule: "FREQ=DAILY; INTERVAL=1; COUNT=10",
  //   // IsAllDay: true
  // }], 
  fields: {
    subject: {name: 'EventTitle', default: "Hello Enviroment", title: "Enter Title"},
    startTime: {name: "EventStart"},
    endTime: {name: "EventEnd"}
  }

  };
  onPopupOpen(args: PopupOpenEventArgs): void { 
    if (args.type === 'Editor') { 
        // Create required custom elements in initial time 
        console.log('args value', args.element);
        // let dialog = args.element.ej2_instance[0];
        // dialog.open = function(args) {
        //     this.scheduleObj.eventBase.focusElement();
        // };
        if (!args.element.querySelector('.custom-field-row')) { 
            let row: HTMLElement = createElement('div', { className: 'custom-field-row' }); 
            let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form'); 
            formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row')); 
            let container: HTMLElement = createElement('div', { className: 'custom-field-container' }); 
            let inputEle: HTMLInputElement = createElement('input', { 
                className: 'e-field', attrs: { name: 'EventType' } 
            }) as HTMLInputElement; 
            container.appendChild(inputEle); 
            row.appendChild(container); 
            let drowDownList: DropDownList = new DropDownList({ 
                dataSource: [ 
                    { text: 'Public Event', value: 'public-event' }, 
                    { text: 'Maintenance', value: 'maintenance' }, 
                    { text: 'Commercial Event', value: 'commercial-event' }, 
                    { text: 'Family Event', value: 'family-event' } 
                ], 
                fields: { text: 'text', value: 'value' }, 
                value: (args.data as { [key: string]: Object }).EventType as string, 
                floatLabelType: 'Always', placeholder: 'Event Type' 
            }); 
            drowDownList.appendTo(inputEle); 
            inputEle.setAttribute('name', 'EventType'); 
        } 
    }
  } 
  
  constructor() {

  }
   
   
  ngOnInit() {
  }

}
