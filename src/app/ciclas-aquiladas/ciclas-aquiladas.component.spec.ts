import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclasAquiladasComponent } from './ciclas-aquiladas.component';

describe('CiclasAquiladasComponent', () => {
  let component: CiclasAquiladasComponent;
  let fixture: ComponentFixture<CiclasAquiladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclasAquiladasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclasAquiladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
