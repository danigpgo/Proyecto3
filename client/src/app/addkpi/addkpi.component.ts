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
  kpidata:[]
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
    const { name,description,goal,kpidata} = this.formInfo;
    console.log(this.formInfo);
    if (name != "" && description != "" && goal != "") {
      this.kpiS.createKpi(name,description,goal,kpidata)
        .map(kpi => console.log(kpi))
        .subscribe((kpi) => this.router.navigate(['/kpi']),
        (err) => this.message = err);
    } else {
    }
  }
}
