import { Component, Input } from "@angular/core";
import { TableColumnIcon } from './table-column-icon';

@Component({
  selector: 'table-column-icon',
  templateUrl:'./table-column-icon.component.html'
})
export class TableColumnIconComponent {

  @Input('t-data') public data!: any;
  @Input('t-icons') public icons!: TableColumnIcon;



}
