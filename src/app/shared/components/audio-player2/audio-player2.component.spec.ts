import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlayer2Component } from './audio-player2.component';

describe('AudioPlayer2Component', () => {
  let component: AudioPlayer2Component;
  let fixture: ComponentFixture<AudioPlayer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioPlayer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioPlayer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
