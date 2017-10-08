import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {KpiService} from '../services/kpi.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})

export class kpiformComponent implements OnInit {
  kpis;
  user: object;
  constructor(
    public auth: AuthService,
    public kpiService: KpiService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.kpiService.getKpi().subscribe(e => this.kpis = e);

  }
}
