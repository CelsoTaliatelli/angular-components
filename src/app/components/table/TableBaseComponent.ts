import { TableRowTemplateDirective } from './table-row-template.directive';
import { ContentChild, Directive, EventEmitter, Input, Output } from "@angular/core";
import { TableColumn } from "./interfaces/table-column";
import { TableColumnIcon } from "./table-column-icon/table-column-icon";
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Directive()
export abstract class TableBaseComponent{
  @ContentChild(TableRowTemplateDirective,{static:true}) tableRowTemplate!:TableRowTemplateDirective;
  @Input('t-columns') columns!: Array<TableColumn>;
  @Input('t-collapse') autoCollapse?:boolean = false;
  @Input('t-data') data!: Array<any>;
  @Input('color') color!:any;
  @Input('t-class') cssClass!:string;
  @Input('t-fixed-column') fixedColumn:boolean = false;
  @Output('t-expanded') expanded: EventEmitter<any> = new EventEmitter<any>();
  @Output('t-collapsed') collapsed: EventEmitter<any> = new EventEmitter<any>();
  protected icons!: TableColumnIcon;
  teste:boolean = false;
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

  emitExpandEvents(row: any) {
    row.$showDetail ? this.expanded.emit(row) : this.collapsed.emit(row);
  }

  setShowDetail(rowId: any | number, isShowDetail: boolean) {
    const isRowIndex = typeof rowId === 'number' && this.data[rowId];

    const row = isRowIndex ? this.data[rowId] : rowId;

    row.$showDetail = isShowDetail;
  }

  isShowRowTemplate(row:any,index:number): boolean{
    if (this.tableRowTemplate && this.tableRowTemplate.poTableRowTemplateShow) {
      return this.tableRowTemplate.poTableRowTemplateShow(row, index);
    }

    return true;
  }

  toggleDetail(row:any){
    const rowShowDetail = row.$showDetail;
    this.setShowDetail(row,!rowShowDetail);
  }

  hasRowTemplate(): boolean {
    return !!this.tableRowTemplate;
  }

  changeArrow(){
    this.teste = !this.teste;
  }
}
