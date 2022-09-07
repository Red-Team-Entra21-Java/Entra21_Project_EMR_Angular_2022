import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPagesComponent } from './forms-pages.component';

describe('FormsPagesComponent', () => {
  let component: FormsPagesComponent;
  let fixture: ComponentFixture<FormsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
