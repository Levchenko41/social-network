import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from '../shared/components/notfound/notfound.component';
import { ProfileRoutingModule } from '../profile/profile-routing.module';

const routes: Routes = [
  {
    path: '', component: AppComponent,
  },
  {
    path: '**', component: NotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule,
    ProfileRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
