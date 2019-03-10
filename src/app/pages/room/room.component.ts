import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  id: string;
  gainNode: GainNode;

  constructor(private route: ActivatedRoute) { }


  changeVolume(value: number) {
    this.gainNode.gain.value = value;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(`You are in the room with id ${this.id}`)

    let audioPromise = navigator.mediaDevices.getUserMedia({
      audio: true
    });

    audioPromise.then(audioStream => {
      //O script abaixo é responsável por processar audio streams.. 
      //Nesse exemplo, eu estou reproduzindo minha propria voz no browser 
      //(ele captura o áudio do mic e simplesmente reproduz)
      const audioContext = new AudioContext();
      this.gainNode = audioContext.createGain();
      this.gainNode.connect(audioContext.destination);

      const microphoneStream = audioContext.createMediaStreamSource(audioStream);
      microphoneStream.connect(this.gainNode);
    })

    audioPromise.catch((x) => {
      console.log('Not Worked');
      console.log(x);
    })
  }
}
