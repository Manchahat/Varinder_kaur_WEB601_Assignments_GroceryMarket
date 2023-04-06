import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() appHoverAffect: string ='';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHoverAffect === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    } else if (this.appHoverAffect === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
          }else if(this.appHoverAffect === 'border'){
            this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');

          }
          
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.appHoverAffect === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
    } else if (this.appHoverAffect === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    }
  }
}
