import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codigos } from './codigos';

describe('Codigos', () => {
  let component: Codigos;
  let fixture: ComponentFixture<Codigos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Codigos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Codigos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
