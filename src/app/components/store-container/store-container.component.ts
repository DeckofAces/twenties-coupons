import { Component } from '@angular/core';
import { StoreFiltersComponent } from '../store-filters/store-filters.component';
import { StoreItemsContainerComponent } from '../store-items-container/store-items-container.component';

@Component({
  selector: 'app-store-container',
  imports: [StoreFiltersComponent, StoreItemsContainerComponent],
  templateUrl: './store-container.component.html',
  styleUrl: './store-container.component.css',
})
export class StoreContainerComponent {}
