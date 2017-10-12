import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { KpiService } from '../services/kpi.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})

export class LineComponent implements OnInit {
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
        this.lineChartData = [
          { data: k.kpidata, label: 'Kpidata' },
          { data: [k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal, k.goal], label: 'Goal' }]
        this.resolve = true;
      })
    });
  }


  public lineChartData: Array<any> = [ ];

  ngOnInit() { }



  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
