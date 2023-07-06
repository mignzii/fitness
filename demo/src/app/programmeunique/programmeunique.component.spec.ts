import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeuniqueComponent } from './programmeunique.component';

describe('ProgrammeuniqueComponent', () => {
  let component: ProgrammeuniqueComponent;
  let fixture: ComponentFixture<ProgrammeuniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeuniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammeuniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
