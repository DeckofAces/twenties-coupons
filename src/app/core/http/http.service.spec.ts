import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { CouponDataResponse, Offer } from '../types';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });
    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch coupon data and return offers when response.result is true', () => {
    const mockOffers: Offer[] = [
      {
        id: '9d860470-9f89-4075-9d6d-16db7d0c141e',
        user_id: 1,
        offer_type: 'coupon',
        title: 'Consequatur ipsa id veniam.',
        company_logo: null,
        company_name: 'Heller, Casper and Cartwright',
        coupon_discount: 9,
        coupon_code: 'TWB615164',
        currency: 'NGN',
        payment_type: 'year',
        amount: '82663.00',
        status: 1,
        job_type: null,
        job_style: null,
        banner_image: null,
        offer_url: '',
        redeemable: 0,
        experience_level: null,
        description:
          'Atque pariatur voluptas similique. Omnis possimus consequatur et animi. Sint eaque accusantium dolores alias et aut. Eum aperiam qui a dolores ut aut iure provident. Ipsam ipsa nemo voluptas voluptas quam. Pariatur et iste odit porro tempora recusandae et nam. Consequatur nihil sit blanditiis voluptatem quibusdam aut fugiat. Itaque inventore vel ut architecto pariatur.',
        created_at: '2024-11-19T04:07:36.000000Z',
        updated_at: '2024-11-19T04:07:36.000000Z',
        user: {
          id: 1,
          name: 'admin admin',
        },
        category: {
          id: 9,
          category_name: 'Finance',
          category_type: 'job',
          category_slug: 'finance',
          category_status: 1,
          category_image: null,
          category_icon: null,
          category_description: null,
          deleted_at: null,
          created_at: null,
          updated_at: null,
        },
        company_location: 'Worodougou',
        brand: {
          id: 3,
          name: 'Amazon',
          logo: null,
          color: '#845600',
          coupon_off: 'up  to  20%  off',
          deleted_at: null,
        },
        days_ago: '2 weeks ago',
        applications: [],
        bookmarked: false,
      },
    ];
    const mockResponse: CouponDataResponse = {
      result: true,
      status: 'success',
      message: 'data fetched',
      total_count: 1,
      data: mockOffers,
    };

    service.fetchCouponData().subscribe((offers) => {
      expect(offers.length).toBe(1);
      expect(offers).toEqual(mockOffers);
    });

    const req = httpMock.expectOne('/api/couponDataTest.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should return empty array when response.result is false', () => {
    const mockResponse: CouponDataResponse = {
      result: false,
      status: 'failed',
      message: 'data not fetched',
      total_count: 1,
      data: [
        // data will be ignored since result is false
        {
          id: '9d860470-9f89-4075-9d6d-16db7d0c141e',
          user_id: 1,
          offer_type: 'coupon',
          title: 'Consequatur ipsa id veniam.',
          company_logo: null,
          company_name: 'Heller, Casper and Cartwright',
          coupon_discount: 9,
          coupon_code: 'TWB615164',
          currency: 'NGN',
          payment_type: 'year',
          amount: '82663.00',
          status: 1,
          job_type: null,
          job_style: null,
          banner_image: null,
          offer_url: '',
          redeemable: 0,
          experience_level: null,
          description:
            'Atque pariatur voluptas similique. Omnis possimus consequatur et animi. Sint eaque accusantium dolores alias et aut. Eum aperiam qui a dolores ut aut iure provident. Ipsam ipsa nemo voluptas voluptas quam. Pariatur et iste odit porro tempora recusandae et nam. Consequatur nihil sit blanditiis voluptatem quibusdam aut fugiat. Itaque inventore vel ut architecto pariatur.',
          created_at: '2024-11-19T04:07:36.000000Z',
          updated_at: '2024-11-19T04:07:36.000000Z',
          user: {
            id: 1,
            name: 'admin admin',
          },
          category: {
            id: 9,
            category_name: 'Finance',
            category_type: 'job',
            category_slug: 'finance',
            category_status: 1,
            category_image: null,
            category_icon: null,
            category_description: null,
            deleted_at: null,
            created_at: null,
            updated_at: null,
          },
          company_location: 'Worodougou',
          brand: {
            id: 3,
            name: 'Amazon',
            logo: null,
            color: '#845600',
            coupon_off: 'up  to  20%  off',
            deleted_at: null,
          },
          days_ago: '2 weeks ago',
          applications: [],
          bookmarked: false,
        },
      ],
    };

    service.fetchCouponData().subscribe((offers) => {
      expect(offers).toEqual([]);
    });

    const req = httpMock.expectOne('/api/couponDataTest.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
