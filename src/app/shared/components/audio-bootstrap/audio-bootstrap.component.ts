import { Audio2Service } from './../../../services/audio2.service';
import { StreamState } from './../../../models/stream-state.model';
import { Component  } from '@angular/core';
import { File2Service } from 'src/app/services/file2.service';

@Component({
  selector: 'app-audio-bootstrap',
  templateUrl: './audio-bootstrap.component.html',
  styleUrls: ['./audio-bootstrap.component.scss']
})
export class AudioBootstrapComponent {

  
  files: Array<any> = [];
  state!: StreamState;
  currentFile: any = {};

  constructor(
    public audio2Service: Audio2Service,
    public file2Service: File2Service
    ) {
      // get media files
      this.file2Service.getFiles().subscribe(files => {this.files = files});
      // listen to stream state
      this.audio2Service.getState().subscribe(state => {this.state = state});
  }

  playStream(url: any) {
    this.audio2Service.playStream(url).subscribe( (events: any) => {
      // listening for fun here
      // console.log(events);
      if(events.type == 'ended'){
        if(!this.isLastPlaying()){
          this.next();
        }else{
          this.openFile(this.files[0], 0);
        }
      }
    });
  }

  openFile(file: { url: any; }, index: any) {
    this.currentFile = { index, file };
    this.audio2Service.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audio2Service.pause();
  }

  play() {        
    this.openFile(this.files[0], 0);
    this.audio2Service.play();
  }

  stop() {
    this.audio2Service.stop();
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

  onSliderChangeEnd(change: any) {
    this.audio2Service.seekTo(change.target.value);
  }

  onVolumeChange(volume: any){
    this.audio2Service.setVolume(volume.target.value);
  }

}
