import { TableColumnIcon } from './table-column-icon/table-column-icon';
import { TableColumn } from './interfaces/table-column';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { TableBaseComponent } from './TableBaseComponent';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends TableBaseComponent{

}
