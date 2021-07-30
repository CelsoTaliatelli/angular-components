import { Directive, ElementRef, HostListener, Output, Renderer2,EventEmitter, Input } from "@angular/core";


@Directive({
  selector: '[tableSort]'
})
export class TableSortDirective{

  constructor(private elementRef: ElementRef,private renderer: Renderer2){
    this.renderer.setStyle(this.elementRef.nativeElement,'background','yellow');
  }

  private __data!: Array<any>;

  @Input('tableSort') set data(value : Array<any>){
    this.__data = value;
  }

  @HostListener('click',['$event'])
  public manageClick(event: Event){
    if(this.elementRef.nativeElement.contains(event.target)){
      console.log(event.target);
    }else{
      console.log('NOK');
    }
  }
}
