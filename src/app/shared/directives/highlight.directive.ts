import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  // Uygulandığı ilgili elementin referansını üzerinden istenilen değişiklik ve özellikler kazandırılabilir.

  @Input() appHighlight: string = 'yellow'; // <div appHighlight="red"></div>
  @Input() labelText?: string; // <div appHighlight="red" labelText="On Sale!"></div>

  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.appHighlight;

    if (this.labelText) {
      const span = document.createElement('span');
      span.innerText = this.labelText;
      span.style.backgroundColor = 'lightgreen';
      span.style.padding = '5px';
      span.style.borderRadius = '5px';
      span.style.marginLeft = '10px';
      span.style.fontSize = '1em';
      span.style.fontWeight = 'bold';
      this.element.nativeElement.appendChild(span);
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.element.nativeElement.style.backgroundColor = this.appHighlight;
  }
}
