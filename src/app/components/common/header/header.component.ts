import { Component, OnInit } from '@angular/core';
import {BackgroundChangeService} from '../../../services/background-change.service';
import {Subscription} from 'rxjs';
import {backgroundImages} from '../../../configuration/backgroundImages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private subscription!: Subscription;
  public backgroundImage!: string;

  constructor(private backgroundChangeService: BackgroundChangeService) {
  }

  ngOnInit(): void {
    this.subscription = this.backgroundChangeService.getBackgroundImage().subscribe(data => {
      this.backgroundImage = 'url(' + data.backgroundImage + ')';
    });
  }

}