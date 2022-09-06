import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserIndexComponent } from './new-user-index.component';

describe('NewUserIndexComponent', () => {
  let component: NewUserIndexComponent;
  let fixture: ComponentFixture<NewUserIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
