import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscrepanciasComponent } from './discrepancias.component';

describe('DiscrepanciasComponent', () => {
  let component: DiscrepanciasComponent;
  let fixture: ComponentFixture<DiscrepanciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscrepanciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscrepanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
