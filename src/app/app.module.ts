import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/common/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {CreateSoundComponent} from './pages/create-sound/create-sound.component';
import {SoundButtonComponent} from './pages/create-sound/components/sound-button/sound-button.component';
import {HomeComponent} from './pages/home/home.component';
import {PlaylistsComponent} from './pages/playlists/playlists.component';
import {MatCardModule} from '@angular/material/card';
import {BackgroundControlComponent} from './pages/create-sound/components/background-control/background-control.component';
import {PlaylistCardComponent} from './pages/playlists/components/playlist-card/playlist-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateSoundComponent,
    SoundButtonComponent,
    HomeComponent,
    PlaylistsComponent,
    BackgroundControlComponent,
    PlaylistCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
