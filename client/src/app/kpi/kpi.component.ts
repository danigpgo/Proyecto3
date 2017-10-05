import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class kpiformComponent implements OnInit {
  formInfo = {
    username:"",
    password:""
  }
  constructor() { }

  ngOnInit() {
  }
}
