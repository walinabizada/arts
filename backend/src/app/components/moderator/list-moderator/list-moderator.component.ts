import { Component, OnInit } from '@angular/core';
import { userListDB } from 'src/app/shared/tables/list-users';

@Component({
  selector: 'app-list-moderator',
  templateUrl: './list-moderator.component.html',
  styleUrls: ['./list-moderator.component.scss']
})
export class ListModeratorComponent implements OnInit {
  public user_list = []

  constructor() {
    this.user_list = userListDB.list_user;
  }

  public settings = {
    columns: {
      avatar: {
        title: 'Avatar',
        type: 'html'
      },
      fName: {
        title: 'First Name',
      },
      lName: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      },
      last_login: {
        title: 'Last Login'
      },
      role: {
        title: 'Role'
      },
    },
  };

  ngOnInit() {
  }

}

