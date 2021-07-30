import { TableColumnIcon } from './table-column-icon/table-column-icon';
import { TableColumn } from './interfaces/table-column';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() { }


  private _columns!: Array<TableColumn>;

  @Input('t-data') data!: Array<any>;
  @Output() getRow = new EventEmitter();
  icons!: TableColumnIcon;

  @Input('t-columns') set columns(value : Array<TableColumn>){

    this._columns = [...value];

    this._columns.forEach(column => {
      column.label = column.label || column.property;
      column.cssWidth = column.width ? `${column.width}` : '100%';
    })
  }
  get columns(): Array<TableColumn>{
    return this._columns;
  }

  public getIcon(column:TableColumn) {

    return this.icons = {
        icon: column.icons?.icon,
        value: column.icons?.value
      }
  }
  selectRow(row: Array<any>){
    this.getRow.emit(row);
  }

}
