import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisensorComponent } from './regisensor.component';

describe('RegisensorComponent', () => {
  let component: RegisensorComponent;
  let fixture: ComponentFixture<RegisensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
