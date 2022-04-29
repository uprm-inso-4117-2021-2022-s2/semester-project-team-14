import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrsettingsComponent } from './usrsettings.component';

describe('UsrsettingsComponent', () => {
  let component: UsrsettingsComponent;
  let fixture: ComponentFixture<UsrsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
