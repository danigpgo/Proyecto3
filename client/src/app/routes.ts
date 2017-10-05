import { Routes } from '@angular/router';

//Importamos los componetes
import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {kpiformComponent} from './kpi/kpi.component';

//Importamos los servicios
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

//Exportamos las rutas
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserprofileComponent, canActivate: [ IsLoggedInService ]  },
    { path: 'login', component: LoginformComponent  },
    { path: 'signup', component: SignupformComponent  },
    { path: 'kpi', component: kpiformComponent  },
    { path: '**', redirectTo: '' }
];
