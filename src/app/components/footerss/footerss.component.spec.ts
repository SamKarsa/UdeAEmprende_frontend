import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterssComponent } from './footerss.component';

describe('FooterssComponent', () => {
  let component: FooterssComponent;
  let fixture: ComponentFixture<FooterssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
