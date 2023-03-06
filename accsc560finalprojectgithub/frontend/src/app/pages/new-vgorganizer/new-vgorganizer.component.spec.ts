import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVgorganizerComponent } from './new-vgorganizer.component';

describe('NewVgorganizerComponent', () => {
  let component: NewVgorganizerComponent;
  let fixture: ComponentFixture<NewVgorganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVgorganizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVgorganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
