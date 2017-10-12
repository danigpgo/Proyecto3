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
  id:"",
  name:"",
  description:"",
  goal:"",
  kpidata:[]
}

  user: any;
  description: any;
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
    console.log("USER DE KPI ADD",this.user)
  }


  createKpi() {

    const {id,name,description,goal,kpidata} = this.formInfo
    this.formInfo.id = this.user._id;
    console.log("USER ID", this.formInfo.id)
    console.log("ENTRE EN CREATE KPI")
    console.log("INFORMACION DEL FORMINFO", this.formInfo);
    if (name != "" && description != "" && goal != "") {
      this.kpiS.createKpi(this.formInfo)
        .map(kpi => console.log(kpi))
        .subscribe((kpi) => this.router.navigate(['/kpi']),
        (err) => this.message = err);
    } else {
    }
  }
}
