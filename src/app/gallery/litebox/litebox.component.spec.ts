import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteboxComponent } from './litebox.component';

describe('LiteboxComponent', () => {
  let component: LiteboxComponent;
  let fixture: ComponentFixture<LiteboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
