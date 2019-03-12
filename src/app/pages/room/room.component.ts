/// <reference types="@types/dom-mediacapture-record" />
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
    });


    //Script para captura de tela
    let screenSharingPromise = (): Promise<MediaStream> => {
      if (navigator.getDisplayMedia) {
        return navigator.getDisplayMedia({video: true});
      } else if (navigator.mediaDevices.getDisplayMedia) {
        return navigator.mediaDevices.getDisplayMedia({video: true});
      } else {
        return navigator.mediaDevices.getUserMedia({video: {mediaSource: 'screen'}});
      }
    }

    screenSharingPromise().then(stream => {
      console.log('stream');
      let mediaRecorder = new MediaRecorder(stream, {mimeType: 'video/webm'});
      let video = <HTMLVideoElement>document.querySelector('video');
      video.srcObject = stream;
      video.onloadedmetadata = function() {
        video.play();
      };
      mediaRecorder.start(10);
    });
  }
}
