import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  componentUsers = [];
  user: object;

  constructor(
    private router: Router,
    private auth: AuthService,
    private users: UsersService,
    private session: SessionService
  ) {
    this.componentUsers = users.users;
    this.user = this.session.getSession();
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  login() {
    return this.router.navigate(['/login']);
  }

  logout() {
    return this.auth.logout();
  }
}
