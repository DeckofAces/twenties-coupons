import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
@Component({
  selector: 'app-store-filters',
  imports: [ReactiveFormsModule, SliderModule, FormsModule],
  templateUrl: './store-filters.component.html',
  styleUrl: './store-filters.component.css',
})
export class StoreFiltersComponent {
  private _fb = inject(FormBuilder);

  priceRange = signal<number[]>([200000, 500000]);

  categoryFormGroup = this._fb.group({
    selectedCategory: [''],
  });
  categoryOptions = ['Restaurant', 'Music', 'Shopping', 'Ride', 'E-Commerce'];

  percentageFormGroup = this._fb.group({
    selectedPercentage: [''],
  });
  percentageOptions = [
    'Free',
    '0-10%',
    '10-25%',
    '35-50%',
    '50-65',
    '65% & Above',
  ];

  locationFormGroup = this._fb.group({
    selectedLocation: [''],
  });
  locationOptions = ['Lagos', 'Ogun', 'Oyo', 'Abuja', 'Port Harcourt'];
}
