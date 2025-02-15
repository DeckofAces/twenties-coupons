import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should render header texts correctly', () => {
    const header = compiled.querySelector('h5');
    const subHeader = compiled.querySelector('h6');
    expect(header?.textContent).toContain("Don't quite find what you want?");
    expect(subHeader?.textContent).toContain(
      'Let us know and we will make it available for you in a jiffy.'
    );
  });

  it('should have four input fields with the correct placeholders', () => {
    const nameInput = compiled.querySelector('#nameInput') as HTMLInputElement;
    const emailInput = compiled.querySelector(
      '#emailInput'
    ) as HTMLInputElement;
    const productNameInput = compiled.querySelector(
      '#productNameInput'
    ) as HTMLInputElement;
    const vendorNameInput = compiled.querySelector(
      '#vendorNameInput'
    ) as HTMLInputElement;

    expect(nameInput).toBeTruthy();
    expect(nameInput.placeholder).toBe('Enter your name');

    expect(emailInput).toBeTruthy();
    expect(emailInput.placeholder).toBe('Enter your email');

    expect(productNameInput).toBeTruthy();
    expect(productNameInput.placeholder).toBe('Enter name of product');

    expect(vendorNameInput).toBeTruthy();
    expect(vendorNameInput.placeholder).toBe('e.g. Jumia, Airpeace, Spotify');
  });

  it('should have a submit button with correct text', () => {
    const button = compiled.querySelector('button') as HTMLButtonElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Submit');
    // Optionally, check for the icon text if it's rendered as text:
    expect(button.textContent).toContain('east');
  });
});
