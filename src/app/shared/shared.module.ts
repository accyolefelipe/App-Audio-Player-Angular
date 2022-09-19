import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { MaterialModule } from '../material.module';
import { AudioPlayer2Component } from './components/audio-player2/audio-player2.component';
import { AudioBootstrapComponent } from './components/audio-bootstrap/audio-bootstrap.component';



@NgModule({
  declarations: [
    AudioPlayerComponent,
    AudioPlayer2Component,
    AudioBootstrapComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AudioPlayerComponent,
    AudioPlayer2Component,
    AudioBootstrapComponent
  ]
})
export class SharedModule { }
