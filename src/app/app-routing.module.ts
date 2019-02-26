import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRoomComponent } from './pages/create-room/create-room.component';
import { EnterRoomComponent } from './pages/enter-room/enter-room.component';
import { RoomComponent } from './pages/room/room.component';

const routes: Routes = [
  {
    path: 'create-room',
    component: CreateRoomComponent
  },
  {
    path: 'enter-room',
    component: EnterRoomComponent
  },
  {
    path: 'room/:id',
    component: RoomComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
