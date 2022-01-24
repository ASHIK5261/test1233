import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStocksComponent } from './app-stocks.component';

describe('AppStocksComponent', () => {
  let component: AppStocksComponent;
  let fixture: ComponentFixture<AppStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
