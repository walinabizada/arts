import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListModeratorComponent } from './list-moderator/list-moderator.component';
import { CreateModeratorComponent } from './create-moderator/create-moderator.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-moderator',
        component: ListModeratorComponent,
        data: {
          title: "Moderator List",
          breadcrumb: "Moderator List"
        }
      },
      {
        path: 'create-account',
        component: CreateModeratorComponent,
        data: {
          title: "Create Account",
          breadcrumb: "Create Account"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeratorRoutingModule { }
