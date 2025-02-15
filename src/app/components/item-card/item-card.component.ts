import { Component, input } from '@angular/core';
import { Offer } from '../../core/types';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [TruncatePipe, TooltipModule, NgClass],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  cardData = input.required<Offer>();
}
