import { AppServiceService } from './app-service.service';
import { TableColumn } from './components/table/interfaces/table-column';
import { LocalStorageService } from './local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private serviceApp:AppServiceService){}

  service = new LocalStorageService();
  dados$!:Observable<any[]>;
  colunas!:Array<TableColumn>;

  ngOnInit(): void {
    this.colunas = [
      {property:'id',type:'string',label:'ID'},
      {property:'country',type:'string',label:'Country'}
    ];
    this.dados$ = this.serviceApp.getAll();
  }
}
