import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';

@Injectable()
export class KpiService {

  BASE_URL: string = 'http://localhost:3000';
    private options = { withCredentials: true };

    constructor(private http: Http) {

    }

    private handleError(e) {
      console.log("CREATE ERROR");
      return Observable.throw(e.json().message);
    }

    createKpi(name,description,goal,frecuency) {
      console.log("entrooo")
      return this.http.post(`${this.BASE_URL}/kpiRoutes/kpi`, {name,description,goal,frecuency}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
    }

    getKpi() {
      console.log("entaaaa")
      return this.http.get(`${this.BASE_URL}/kpiRoutes/kpi`)
        .map((res) => res.json());
    }

    getsinglekpi(id) {
      return this.http.get(`${this.BASE_URL}/kpiRoutes/kpi/${id}`)
        .map((res) => res.json());
    }

    editkpi(kpi) {
      return this.http.put(`${this.BASE_URL}/kpiRoutes/kpi/${kpi.id}`, kpi)
        .map((res) => res.json());
    }

    removekpi(id) {
      return this.http.delete(`${this.BASE_URL}/kpiRoutes/kpi/${id}`)
        .map((res) => res.json());
    }
}


//
// }
