import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkgLibTestComponent } from './skg-lib-test.component';

describe('SkgLibTestComponent', () => {
  let component: SkgLibTestComponent;
  let fixture: ComponentFixture<SkgLibTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkgLibTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkgLibTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
