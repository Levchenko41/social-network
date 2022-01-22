import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { WallComponent } from './components/wall/wall.component';

const routes: Routes = [
  {
    path: 'wall', component: WallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
