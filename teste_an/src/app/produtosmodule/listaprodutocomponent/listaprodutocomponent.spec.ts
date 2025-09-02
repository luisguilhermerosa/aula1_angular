import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listaprodutocomponent } from './listaprodutocomponent';

describe('Listaprodutocomponent', () => {
  let component: Listaprodutocomponent;
  let fixture: ComponentFixture<Listaprodutocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listaprodutocomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listaprodutocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
