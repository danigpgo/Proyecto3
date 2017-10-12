import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { KpiService } from '../services/kpi.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})

export class RadarComponent implements OnInit {
  user: object;
  data;
  kpiID;
  resolve: boolean = false;
  constructor(
    public auth: AuthService,
    public kpiService: KpiService,
    private route: ActivatedRoute) {

    // User getter
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter().subscribe(user => this.user = user);

    // KPI getter from params
    this.route.params.subscribe((params) => {
      console.log("Getting KPI:" + params['id']);
      this.kpiService.getsinglekpi(params['id']).subscribe(k => {
        console.log(k)
        this.radarChartData = [
          { data: k.kpidata, label: 'Kpidata' },
          { data: [k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal], label: 'Goal' }]
        this.resolve = true;
      })
    });
  }

  public radarChartData:any = [ ];

    ngOnInit() { }

    // Radar
    public radarChartLabels:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    public radarChartType:string = 'radar';




  }
