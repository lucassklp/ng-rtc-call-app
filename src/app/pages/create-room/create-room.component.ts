import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Room } from 'src/app/domain/room';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  form: FormGroup
  constructor(fb: FormBuilder, private afs: AngularFirestore) {
    this.form = fb.group({
      'roomName': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }


  createRoom(){
    console.log('Creating the room...')
    
    let room: Room = {
      name: this.form.controls['roomName'].value,
      password: this.form.controls['password'].value
    }

    console.log(room);

    this.afs.collection('room').add(room).then(x => {
      
    });


  }
}
