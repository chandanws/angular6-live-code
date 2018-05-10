import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  componentUsers = [];

  constructor(private users: UsersService) {
    console.log(users.users);

    this.componentUsers = users.users;
  }

  ngOnInit() { }

}
