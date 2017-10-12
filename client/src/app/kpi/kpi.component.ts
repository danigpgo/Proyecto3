import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { KpiService } from '../services/kpi.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})

export class kpiformComponent implements OnInit {
  kpis;
  user: any;
  constructor(
    public auth: AuthService,
    public kpiService: KpiService,
    private router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
      this.kpiService.getKpi()
      .subscribe(e => {
        console.log("VALOR DE", e)
        this.kpis = e;
      });
  }

  ngOnInit() {
    console.log("USER DE KPILIS", this.user)


  }

// showKPI() {
//   console.log(this.kpis)
//   this.kpiService.copyid(this.kpis)
// }

}
