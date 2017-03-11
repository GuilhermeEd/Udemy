import { UserComponent } from './user/user.component';
import { HomeComponent } from './home-component.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTS: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTS);
