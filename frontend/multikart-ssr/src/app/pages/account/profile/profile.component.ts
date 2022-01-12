import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() user: any = null;
  url: any = 'localhost:1111/assests/users';

  constructor() { 
    console.log('user value', this.user);
  }

  ngOnInit(): void {
  }

}
