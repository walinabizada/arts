import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventListComponent } from './event-list/event.list.component';
import { EventRoutingModule } from './event-routing.module';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ScheduleModule, RecurrenceEditorModule, TimelineViewsService, DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [EventComponent, EventListComponent],
  imports: [
    CommonModule, 
    EventRoutingModule,
    ScheduleModule, RecurrenceEditorModule, ButtonModule,
    FontAwesomeModule,Ng2SmartTableModule,
    NgxDatatableModule
  ],
  providers: [TimelineViewsService, DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService]
})

export class EventModule { }
