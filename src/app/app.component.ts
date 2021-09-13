import { AppServiceService } from './app-service.service';
import { Component, OnInit } from '@angular/core';
import { TableColumn } from './components/table/interfaces/table-column';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  columns!: Array<TableColumn>;
  data: any[] = [];
  page:number = 0;
  query!:string;
  params = new HttpParams();
  pageNumber!:number;
  cpf!:string | null;
  dateA: any;
  dateB: any;
  constructor(private http: AppServiceService){}

  productsParams(params:Array<any>): String{
    params.forEach((item) => {
      if(item.estado){
        this.params=this.params.append(item.name,item.value);
      }
    })
    return this.params.toString();
  }

  pageParams(page:number):String{
    this.params=this.params.set('page',page);
    return this.params.toString();
  }
  cpfParams(cpf:string | null):String{
    if(cpf !== null){
      this.params=this.params.set('cpf',cpf);
    }
    return this.params.toString();
  }

  calculateDiff(dateSent:any){
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    console.log(Math.floor((
        Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
        - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24)));
}

  ngOnInit(): void {

  }

  changePage(page: number): void{
    const params = new HttpParams();
    let query = params.set('page',this.page).set('size',5).append('name','frank');
    let teste = [{name:'Op',value:74,estado:true},{name:'CC',value:89,estado:true}];
    this.page++;
    this.pageNumber = this.page;

    console.log('query',query.toString());
    console.log('params',this.params.toString());
    localStorage.setItem('cpf','12345698758');
    this.pageParams(this.pageNumber);
    this.productsParams(teste);
    this.cpf = localStorage.getItem('cpf');
    this.cpfParams(null);

    this.http.getAll(this.page,query).subscribe((data: any) => {
      this.data = data.data;
    });
  }
}
