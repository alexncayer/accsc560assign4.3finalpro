import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVgorganizerComponent } from './edit-vgorganizer.component';

describe('EditVgorganizerComponent', () => {
  let component: EditVgorganizerComponent;
  let fixture: ComponentFixture<EditVgorganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVgorganizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVgorganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
