import { TableColumn } from './components/table/interfaces/table-column';
import { LocalStorageService } from './local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  service = new LocalStorageService();
  dados!:any[];
  colunas!:Array<TableColumn>;

  ngOnInit(): void {
    this.colunas = [
      {property:'id',type:'string',label:'ID'},
      {property:'nome',type:'string',label:'ID'}
    ];
    this.dados = [
      {id:1,nome:"A"},
      {id:2,nome:"B"},
      {id:3,nome:"C"},
      {id:4,nome:"D"}
    ]
    const month = new Date(2020,5,1);
    month.setMonth(month.getMonth() - 19 );
    month.setFullYear(month.getFullYear());
    console.log(month.getMonth() + '/' + month.getFullYear());
  }
}
