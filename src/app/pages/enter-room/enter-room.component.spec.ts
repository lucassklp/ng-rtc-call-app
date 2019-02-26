import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterRoomComponent } from './enter-room.component';

describe('EnterRoomComponent', () => {
  let component: EnterRoomComponent;
  let fixture: ComponentFixture<EnterRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
