import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxErrorsModule } from '@hackages/ngxerrors';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { CreateRoomComponent } from './pages/create-room/create-room.component';
import { RoomComponent } from './pages/room/room.component';
import { EnterRoomComponent } from './pages/enter-room/enter-room.component';
import { CaptureAudioService } from './services/capture-audio.service';
import { CaptureScreenService } from './services/capture-screen.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    RoomComponent,
    EnterRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxErrorsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    CaptureAudioService,
    CaptureScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
