import { Plano } from './plano';
import { LocalStorageService } from './local-storage.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  service = new LocalStorageService();
  dados: Plano =  {id:"5",dadoA:false,dadoB:false}
  ngOnInit(): void {

  }


  add(){
    this.service.addItem(this.dados);
  }
}
