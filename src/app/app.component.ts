import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  columns!: any[];
  data!: any[];

  ngOnInit(): void {
    this.columns = [
      {property:'codigo',label: 'Código',width: 120 },
      {property: 'nome',label: 'Nome', width: '200px'},
      {property:'cargo',label: 'Cargo', width: 150 },
      {property:'email',label: 'E-mail', width: 100},
      {property:'status',label: 'Status', width: 80},
      {property:'data',label: 'Data', width: 80},
    ];

    this.data = [
      {codigo: '1',nome:'Celso Henrique',cargo:'FullStack Developer',email:'celso@mail.com',data: new Date(),status:'OK'},
      {codigo: '2',nome:'Sara',cargo:'UX Designer',email:'sara@mail.com',data: new Date(),status:'OK'},
      {codigo: '3',nome:'João',cargo:'Arquiteto de Software',email:'joao@mail.com',data: new Date(),status:'OK'}
    ]

    console.log(this.columns);
    console.log(this.data);

  }

  selectedRow(value:any){
      console.log('clicou',value);
    }
}
