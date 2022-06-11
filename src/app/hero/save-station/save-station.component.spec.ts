import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveStationComponent } from './save-station.component';

describe('SaveStationComponent', () => {
  let component: SaveStationComponent;
  let fixture: ComponentFixture<SaveStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
