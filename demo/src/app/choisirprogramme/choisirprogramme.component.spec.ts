import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirprogrammeComponent } from './choisirprogramme.component';

describe('ChoisirprogrammeComponent', () => {
  let component: ChoisirprogrammeComponent;
  let fixture: ComponentFixture<ChoisirprogrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisirprogrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoisirprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
