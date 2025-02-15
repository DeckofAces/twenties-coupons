import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemsContainerComponent } from './store-items-container.component';

describe('StoreItemsContainerComponent', () => {
  let component: StoreItemsContainerComponent;
  let fixture: ComponentFixture<StoreItemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreItemsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
