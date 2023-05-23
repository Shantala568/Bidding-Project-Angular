import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadboardComponent } from './madboard.component';

describe('MadboardComponent', () => {
  let component: MadboardComponent;
  let fixture: ComponentFixture<MadboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
