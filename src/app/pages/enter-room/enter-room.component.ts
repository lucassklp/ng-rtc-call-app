import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

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
      'password': ['', Validators.required]
    })
  }

  enterRoom(){
    console.log('Creating the room...')
    
    let room: Room = {
      name: this.form.controls['roomName'].value,
      password: this.form.controls['password'].value
    }

    console.log(room);

    this.afs.collection('rooms').add(room).then(x => {
      console.log(x);
    });

  }

}
