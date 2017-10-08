import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {KpiService} from '../services/kpi.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-addkpi',
  templateUrl: './addkpi.component.html',
  styleUrls: ['./addkpi.component.css']
})

export class AddkpiComponent implements OnInit {

  formInfo = {
  name:"",
  description:"",
  goal:"",
  frecuency:"",
}


  user: object;
  message: string;
  kpi;
  constructor(
    public auth: AuthService,
    public kpiS: KpiService,
    public router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
  }


  createKpi() {
    const { name,description,goal,frecuency} = this.formInfo;
    console.log(this.formInfo);
    if (name != "" && description != "" && goal != "" && frecuency != "") {
      this.kpiS.createKpi(name,description,goal,frecuency)
        .map(kpi => console.log(kpi))
        .subscribe((kpi) => this.router.navigate(['/kpi']))
    } else {
      this.message = "All fields required";
    }
  }
}
