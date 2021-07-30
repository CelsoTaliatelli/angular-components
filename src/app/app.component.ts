import { AppServiceService } from './app-service.service';
import { Component, OnInit } from '@angular/core';
import { TableColumn } from './components/table/interfaces/table-column';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  columns!: Array<TableColumn>;
  data: any[] = [];
  page:number = 0;

  constructor(private http: AppServiceService){}

  ngOnInit(): void {
    this.columns = [
      {property:'_id',label:'#ID',type:'string'},
      {property:'name',label: 'Nome',type:'string'},
      {property:'trips',label:'Viagens',type:'icon',icons:
        {
          icon: 'fa fa-camera',
          value: ''
        }
      }
    ];
    this.http.getAll(0).subscribe((data: any) => {
      this.data = data.data;
    });
  }
  selectedRow(value:any){
      console.log('clicou',value);
  }

  changePage(page: number): void{
      this.page++;
      this.http.getAll(this.page).subscribe((data: any) => {
        this.data = data.data;
      });
  }
}
