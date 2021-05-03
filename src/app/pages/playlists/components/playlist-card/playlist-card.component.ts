import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {

  public audio = new Audio();

  public currentPercentagePlayed = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.initializeAudio();
  }

  private initializeAudio(): void{
    this.audio.src = '/assets/soundConfiguration/sounds/sea.wav';
    this.audio.load();

    this.audio.addEventListener('timeupdate', (currentTime) => {
      this.currentPercentagePlayed = (this.audio.currentTime) / (this.audio.duration / 100);
    });
  }

  public getAudioDuration(): void {
    this.audio.play();
    console.log(this.audio.duration);
    console.log(this.audio.src);
  }


}
