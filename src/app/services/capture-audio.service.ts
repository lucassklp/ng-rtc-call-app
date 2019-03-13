import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptureAudioService {

  constructor() { }

  capture(): Promise<MediaStream> {
    return navigator.mediaDevices.getUserMedia({
      audio: true
    });
  }
}
