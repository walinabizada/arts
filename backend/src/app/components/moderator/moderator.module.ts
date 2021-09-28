import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModeratorRoutingModule } from './moderator-routing.module';
import { ListModeratorComponent } from './list-moderator/list-moderator.component';
import { CreateModeratorComponent } from './create-moderator/create-moderator.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListModeratorComponent, CreateModeratorComponent],
  imports: [
    CommonModule,
    NgbModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    ModeratorRoutingModule
  ]
})
export class ModeratorModule { }
