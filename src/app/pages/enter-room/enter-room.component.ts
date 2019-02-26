import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { RoomAccess } from 'src/app/domain/room.access';

@Component({
  selector: 'app-enter-room',
  templateUrl: './enter-room.component.html',
  styleUrls: ['./enter-room.component.scss']
})
export class EnterRoomComponent {

  form: FormGroup;
  constructor(fb: FormBuilder, private afs: AngularFirestore) {
    this.form = fb.group({
      'roomName': ['', Validators.required],
      'password': ['', Validators.required],
      'nickname': ['', Validators.required]
    })
  }

  enterRoom(){
    console.log('Entering the room...')
    
    let roomAccess: RoomAccess = {
      name: this.form.controls['roomName'].value,
      password: this.form.controls['password'].value,
      nickname: this.form.controls['nickname'].value,
    }

    this.afs.collection('rooms', r => r.where('name', '==', roomAccess.name).where('password', '==', roomAccess.password))

    console.log(roomAccess);
  }

}
