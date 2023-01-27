import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinerComponent } from './winer.component';

describe('WinerComponent', () => {
  let component: WinerComponent;
  let fixture: ComponentFixture<WinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
