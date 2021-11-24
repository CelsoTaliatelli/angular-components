import {AfterContentInit, AfterViewChecked, AfterViewInit, Directive, ElementRef,Input,OnChanges,OnInit,Renderer2, SimpleChanges} from "@angular/core";

@Directive({
  selector:'[trStyle]'
})
export class TableCustomRowDirective implements AfterViewInit{

  @Input('trStyle') data!:DadosStyle;
  constructor(private elementRef: ElementRef,private render: Renderer2){}
  ngAfterViewInit(): void {
    if(this.data.dados){
      for(let i = 0;i <= this.data.dados.length;i++){
        if(this.data.dados[i] && this.data.dados[i][this.data.property] == "Quatar"){
          this.render.setStyle(this.elementRef.nativeElement.querySelectorAll("tr")[i],this.data.style,this.data.color);
        }
      }
    }
  }

}



export interface DadosStyle{
    dados:Array<any>,
    property:string,
    style:string,
    color:string
}
