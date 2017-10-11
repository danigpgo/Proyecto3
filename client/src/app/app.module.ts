import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import {routes} from './routes';
import { ChartsModule } from 'ng2-charts';
import { SignupformComponent } from './signupform/signupform.component';
import { kpiformComponent } from './kpi/kpi.component';
import { KpiService } from './services/kpi.service';
import { AddkpiComponent } from './addkpi/addkpi.component';
import { LineComponent } from './line/line.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    kpiformComponent,
    AddkpiComponent,
    LineComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, KpiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
