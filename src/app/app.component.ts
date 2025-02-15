import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StoreContainerComponent } from './components/store-container/store-container.component';

@Component({
  selector: 'app-root',
  imports: [
    NavBarComponent,
    BannerComponent,
    FooterComponent,
    StoreContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
