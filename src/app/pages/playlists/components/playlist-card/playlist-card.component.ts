import {Component, Input, OnInit} from '@angular/core';
import {MatSliderChange, MatSliderModule} from '@angular/material/slider';
import {MatDialog} from '@angular/material/dialog';
import {ButtonDialogComponent} from '../button-dialog/button-dialog.component';

export interface DialogData {
  icons: any;
}

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {

  @Input() title!: string;
  @Input() artist!: string;
  @Input() image!: string;
  @Input() sound!: string;
  @Input() icons!: any;

  public audio = new Audio();

  public currentTimePlayed = 0;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initializeAudio();
  }

  private initializeAudio(): void {
    this.audio.src = this.sound;
    this.audio.load();

    this.audio.addEventListener('timeupdate', (currentTime) => {
      this.currentTimePlayed = this.audio.currentTime;
    });
  }

  public playPauseAudio(): void {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  formatLabel(value: number): number {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }

  public onInputChanged(event: MatSliderChange): void {
    if (typeof event.value === 'number') {
      this.audio.currentTime = event.value;
    }
  }

  public openDialog(): void {
    this.dialog.open(ButtonDialogComponent, {
      maxHeight: '400px',
      width: '400px',
      data: {icons: this.icons}
    });

  }

}
