import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteboxCommentsComponent } from './litebox-comments.component';

describe('LiteboxCommentsComponent', () => {
  let component: LiteboxCommentsComponent;
  let fixture: ComponentFixture<LiteboxCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteboxCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteboxCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
