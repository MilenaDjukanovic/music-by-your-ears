import { Component, OnInit } from '@angular/core';
import {defaultPlaylistConfiguration} from '../../configuration/defaultPlaylistConfiguration';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  public playlistConfiguration = defaultPlaylistConfiguration;

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
