import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { WallComponent } from './components/wall/wall.component';

@NgModule({
  declarations: [
    WallComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatSliderModule
  ]
})
export class ProfileModule { }
