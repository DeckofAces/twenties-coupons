import {
  Component,
  computed,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { HttpService } from '../../core/http/http.service';
import { Offer } from '../../core/types';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PopoverModule, Popover } from 'primeng/popover';
import { DialogModule } from 'primeng/dialog';
import { StoreFiltersComponent } from '../store-filters/store-filters.component';

@Component({
  selector: 'app-store-items-container',
  imports: [
    ItemCardComponent,
    PaginatorModule,
    PopoverModule,
    DialogModule,
    StoreFiltersComponent,
  ],
  templateUrl: './store-items-container.component.html',
  styleUrl: './store-items-container.component.css',
})
export class StoreItemsContainerComponent implements OnInit {
  private _http: HttpService = inject(HttpService);
  @ViewChild('op') op!: Popover;
  couponItems = signal<Offer[]>([]);
  first = signal<number>(0);
  rows = signal<number>(16);
  filteredCoupons = computed(() => {
    const filteredItems = this.couponItems().filter((entry) =>
      entry.company_name
        .toLowerCase()
        .includes(this.searchQuery().toLowerCase())
    );

    return filteredItems.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();

      return this.sortDirection() === 'Newest to Oldest'
        ? dateB - dateA
        : dateA - dateB;
    });
  });
  paginatedCoupons = computed(() => {
    const start = this.first();
    const end = start + this.rows();
    return this.filteredCoupons().slice(start, end);
  });
  searchQuery = signal<string>('');
  sortDirection = signal<string>('Newest to Oldest');
  sortDirectionOptions: string[] = ['Newest to Oldest', 'Oldest to Newest'];
  isFiltersDialogVisible: boolean = false;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._http.fetchCouponData().subscribe((data) => {
      this.couponItems.set(data);
    });
  }

  onPageChange(event: PaginatorState): void {
    this.first.set(Number(event.first));
    this.rows.set(Number(event.rows));
  }

  search(query: string): void {
    this.searchQuery.set(query);
    this.first.set(0);
  }

  toggle(event: any) {
    this.op.toggle(event);
  }

  sort(direction: string): void {
    this.sortDirection.set(direction);
    this.op.hide();
  }

  showDialog(): void {
    this.isFiltersDialogVisible = true;
  }
}
