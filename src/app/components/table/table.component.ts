import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }


  private _columns!: Array<any>;
  private _data!: Array<any>;

  @Input('t-columns') set columns(value : Array<any>){

    this._columns = [...value];

    this._columns.forEach(column => {
      column.label = column.label || column.property;
      column.cssWidth = column.width ? `${column.width}` : '100%';
    })
  }
  get columns(): Array<any>{
    return this._columns;
  }

  @Input('t-data') data!: Array<any>;

  ngOnInit(): void {
  }

}
