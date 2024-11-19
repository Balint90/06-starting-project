import { Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control', //<-- host element's class
    '(click)': 'onClick()',  //<-- click event
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; //old way to setup class attribute on a tag
  // @HostListener('click') onClick() {
  //   console.log("Clicked");
  // }
  @Input({ required: true }) label!: string;
  @Input({ required: true }) labelFor!: string;
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('Klikk');
    // console.log(this.el);
    console.log(this.control());
  }
}
