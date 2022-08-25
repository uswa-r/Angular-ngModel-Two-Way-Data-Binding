import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModulePerformanceComponentComponent } from './ng-module-performance-component.component';

describe('NgModulePerformanceComponentComponent', () => {
  let component: NgModulePerformanceComponentComponent;
  let fixture: ComponentFixture<NgModulePerformanceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModulePerformanceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModulePerformanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
