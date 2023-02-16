import { Directive, ElementRef, Renderer2, HostListener, Input, RendererStyleFlags2  } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() appHoverAffect: string ='';
  originalBorder: string='';
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHoverAffect === 'boldandborder') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
      this.originalBorder = this.el.nativeElement.style.border;
          this.renderer.setStyle(this.el.nativeElement, 'border', '4px dotted blue', RendererStyleFlags2.DashCase);
     
    } 
   else if (this.appHoverAffect === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
     
     
    }
    else if (this.appHoverAffect === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'borderBottom', '2px solid red');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
          
          }


          
          
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.appHoverAffect === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
      this.renderer.setStyle(this.el.nativeElement, 'border', this.originalBorder);
       
    } 
    else if (this.appHoverAffect === 'boldandborder') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
      this.renderer.setStyle(this.el.nativeElement, 'border', this.originalBorder);
       
    }
    else if (this.appHoverAffect === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'borderBottom', 'none');
    } 
  }
}
