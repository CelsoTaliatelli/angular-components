import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { TableBaseComponent } from './TableBaseComponent';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss','./table1.scss']
})
export class TableComponent extends TableBaseComponent implements OnInit{
  ngOnInit(): void {
    this.data.forEach((item) => item.$showDetail = false);
  }

}
