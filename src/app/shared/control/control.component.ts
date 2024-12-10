import { Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onclick()'
  }
})
export class ControlComponent {
  //@HostBinding('class') className='control';    <--- Antes lo de host: se hacia así
  // @HostListener('click') onClick(){
  //   console.log('clicked!');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);  // Accede al Elemento 'host' desde el codigo  ¡ojo!
 // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); //signal
  onClick(){
      console.log('clicked!');
      console.log(this.el);
      console.log(this.control());
    }
}
