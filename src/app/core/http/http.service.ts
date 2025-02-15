import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CouponDataResponse, Offer } from '../types';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  fetchCouponData(): Observable<Offer[]> {
    return this.http.get<CouponDataResponse>('/api/couponDataTest.json').pipe(
      map((res) => {
        if (res.result) {
          return res.data;
        } else {
          return [];
        }
      }),
    );
  }
}
