import { AudioService } from './../../../services/audio.service';
import { Component, OnInit } from '@angular/core';
import { StreamState } from 'src/app/models/stream-state.model';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {

  files: Array<any> = [];
  state!: StreamState;
  currentFile: any = {};

  constructor(
    public audioService: AudioService,
    public fileService: FileService
  ) { 
    this.fileService.getFiles().subscribe(files => { this.files = files });
    this.audioService.getState().subscribe(state => { this.state = state });
  }

  playStream(url: any) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file: { url: any; }, index: any) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change: { value: any; }) {
    this.audioService.seekTo(change.value);
  }

}
