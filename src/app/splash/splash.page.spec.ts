import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashPage } from './splash.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SplashPage', () => {
  let component: SplashPage;
  let fixture: ComponentFixture<SplashPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplashPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
