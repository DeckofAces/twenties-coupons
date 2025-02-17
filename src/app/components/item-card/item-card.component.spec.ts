import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardComponent } from './item-card.component';
import { ComponentRef, computed, InputSignal } from '@angular/core';
import { Offer } from '../../core/types';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;
  let componentRef: ComponentRef<ItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCardComponent);

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    const data: Offer = {
      id: '',
      user_id: 0,
      offer_type: '',
      title: '',
      company_logo: null,
      company_name: '',
      coupon_discount: 0,
      coupon_code: '',
      currency: '',
      payment_type: '',
      amount: '',
      status: 0,
      job_type: null,
      job_style: null,
      banner_image: null,
      offer_url: '',
      redeemable: 0,
      experience_level: null,
      description: '',
      created_at: '',
      updated_at: '',
      user: {
        id: 0,
        name: '',
      },
      category: {
        id: 0,
        category_name: '',
        category_type: '',
        category_slug: '',
        category_status: 0,
        category_image: null,
        category_icon: null,
        category_description: null,
        deleted_at: null,
        created_at: null,
        updated_at: null,
      },
      company_location: '',
      brand: {
        id: 0,
        name: '',
        logo: null,
        color: '',
        coupon_off: '',
        deleted_at: null,
      },
      days_ago: '',
      applications: [],
      bookmarked: false,
    };

    componentRef.setInput('cardData', data);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('input: card data', () => {
    it('should recieve a card data as input when the component is created', () => {
      fixture.detectChanges();

      expect(component.cardData).toBeTruthy();
    });
  });
});
