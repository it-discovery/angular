import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookRegistrationComponent} from './book-registration.component';

describe('BookRegistrationComponent', () => {
  let component: BookRegistrationComponent;
  let fixture: ComponentFixture<BookRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookRegistrationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
