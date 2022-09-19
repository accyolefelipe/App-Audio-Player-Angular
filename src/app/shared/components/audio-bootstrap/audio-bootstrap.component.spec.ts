import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBootstrapComponent } from './audio-bootstrap.component';

describe('AudioBootstrapComponent', () => {
  let component: AudioBootstrapComponent;
  let fixture: ComponentFixture<AudioBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
