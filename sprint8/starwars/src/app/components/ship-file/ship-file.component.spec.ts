import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipFileComponent } from './ship-file.component';

describe('ShipFileComponent', () => {
  let component: ShipFileComponent;
  let fixture: ComponentFixture<ShipFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
