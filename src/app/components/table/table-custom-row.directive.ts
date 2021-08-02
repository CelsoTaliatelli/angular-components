import {AfterViewChecked, Directive, ElementRef,Input,Renderer2} from "@angular/core";

@Directive({
  selector:'[tableRow]'
})
export class TableCustomRowDirective implements AfterViewChecked{

  @Input('tableRow') data!:string;
  constructor(private elementRef: ElementRef,private render: Renderer2){}

  ngAfterViewChecked(): void {
    let tr = this.elementRef.nativeElement.querySelector("tr");
    if(tr !== null){
      this.render.setStyle(tr,'cursor',this.data);
    }
  }




}
