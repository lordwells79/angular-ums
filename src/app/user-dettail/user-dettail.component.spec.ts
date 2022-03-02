import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDettailComponent } from './user-dettail.component';

describe('UserDettailComponent', () => {
  let component: UserDettailComponent;
  let fixture: ComponentFixture<UserDettailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDettailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDettailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
