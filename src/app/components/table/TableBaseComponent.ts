import { Directive, Input, Output } from "@angular/core";
import { TableColumn } from "./interfaces/table-column";
import { TableColumnIcon } from "./table-column-icon/table-column-icon";

@Directive()
export abstract class TableBaseComponent{

  @Input('t-columns') columns!: Array<TableColumn>;
  @Input('t-data') data!: Array<any>;
  @Input('color') color!:any;
  protected icons!: TableColumnIcon;
  //@Output() getRow = new EventEmitter();

  protected getIcon(column:TableColumn) {

    return this.icons = {
        icon: column.icons?.icon,
        value: column.icons?.value
      }
  }
  public testeStyle(){
    if(this.color){
      return {'color':'red'}
    }
    return {'color':'black'}
  }
  protected selectRow(row: Array<any>){
    //this.getRow.emit(row);
  }
}
