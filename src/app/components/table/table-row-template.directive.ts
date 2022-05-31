import { Directive, Input, TemplateRef } from '@angular/core';
@Directive({
  selector:'[table-row-template]'
})
export class TableRowTemplateDirective{
  @Input('p-table-row-template-show') poTableRowTemplateShow!: (row: any, index: number) => boolean;
  constructor(public templateRef: TemplateRef<any>){}
}
