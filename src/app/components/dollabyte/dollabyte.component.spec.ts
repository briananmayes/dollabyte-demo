import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollabyteComponent } from './dollabyte.component';

describe('DollabyteComponent', () => {
  let component: DollabyteComponent;
  let fixture: ComponentFixture<DollabyteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollabyteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollabyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
