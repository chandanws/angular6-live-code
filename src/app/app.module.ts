import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for input handling
import { RouterModule } from '@angular/router'; // for routing
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http'; // for http

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// Services
import { UsersService } from './services/users.service';
import { ContactService } from './services/contact.service';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        { path: 'contact', component: ContactComponent },
        { path: 'about', component: AboutComponent },
        { path: '**', component: HomeComponent }
      ],
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
