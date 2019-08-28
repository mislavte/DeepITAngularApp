import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzavaDetailComponent } from './drzava-detail.component';

describe('DrzavaDetailComponent', () => {
  let component: DrzavaDetailComponent;
  let fixture: ComponentFixture<DrzavaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrzavaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrzavaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
