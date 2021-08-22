import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';
import { ScheduleModule, RecurrenceEditorModule, TimelineViewsService, DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule, 
    EventRoutingModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [TimelineViewsService, DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService]
})

export class EventModule { }
