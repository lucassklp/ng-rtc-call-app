import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRoomComponent } from './pages/create-room/create-room.component';

const routes: Routes = [
  {
    path: 'create-room',
    component: CreateRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
