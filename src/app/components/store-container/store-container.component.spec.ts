import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreContainerComponent } from './store-container.component';

describe('StoreContainerComponent', () => {
  let component: StoreContainerComponent;
  let fixture: ComponentFixture<StoreContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
