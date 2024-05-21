import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('icon') icon!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  toggleMenu() {
    const menu = this.menu.nativeElement;
    const icon = this.icon.nativeElement;
    if (menu.classList.contains('open')) {
      this.renderer.removeClass(menu, 'open');
    } else {
      this.renderer.addClass(menu, 'open');
    }

    if (icon.classList.contains('open')) {
      this.renderer.removeClass(icon, 'open');
    } else {
      this.renderer.addClass(icon, 'open');
    }
  }
  scrollTo(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView();
  }
}
