/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValueComponent } from './value.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ValueComponent', () => {
  let component: ValueComponent;
  let fixture: ComponentFixture<ValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule],
      declarations: [ ValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
