import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';


@Injectable()
export class KpiService {
requestURL;

  BASEURL = environment.BASEURL;
    private options = { withCredentials: true };

    constructor(private http: Http) {

    }

    private handleError(e) {
      console.log("CREATE ERROR");
      return Observable.throw(e.json().message);
    }

    createKpi(formInfo) {
      console.log("ENTRO EN CREATE KPI SERVICE")
      console.log("OPTIONS EN CREATE KPI", this.options)
      return this.http.post(`${this.BASEURL}/kpiRoutes/kpi`, {formInfo}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
    }

    getKpi() {
      console.log("entaaaa")
      return this.http.get(`${this.BASEURL}/kpiRoutes/kpi`, this.options)
        .map((res) => res.json());
    }

    // copyid(id) {
    //   this.requestURL = id
    // }

    getsinglekpi(kpiID) {
      return this.http.get(`${this.BASEURL}/kpiRoutes/kpi/${kpiID}`)
        .map((res) => res.json());
    }

    editkpi(kpi) {
      return this.http.put(`${this.BASEURL}/kpiRoutes/kpi/${kpi.id}`, kpi)
        .map((res) => res.json());
    }

    removekpi(id) {
      return this.http.delete(`${this.BASEURL}/kpiRoutes/kpi/${id}`)
        .map((res) => res.json());
    }
}


//
// }
