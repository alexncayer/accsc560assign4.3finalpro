import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgorganizerViewComponent } from './vgorganizer-view.component';

describe('VgorganizerViewComponent', () => {
  let component: VgorganizerViewComponent;
  let fixture: ComponentFixture<VgorganizerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgorganizerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VgorganizerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
