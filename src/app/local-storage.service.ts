import { Plano } from './plano';

export class LocalStorageService{

  items:Array<Plano> = [];

  clear(){
    this.items = [];
  }

  addItem(item: Plano){
    this.items = this.getItems();
    let foundItem = this.items.find((i) => i.id === item.id);
    if(!foundItem){
      this.items.push(item);
      localStorage.setItem('items',JSON.stringify(this.items));
      this.clear();
    }else{
      this.removeItem(item);
      console.log(this.items);
      this.items.push(item);
      localStorage.setItem('items',JSON.stringify(this.items));
    }
  }

  removeItem(item:Plano){
    this.items.splice(this.items.findIndex(i => i.id === item.id),1);
  }

  mostrarItems(){
    console.log("items",localStorage.getItem('items'));
  }

  getItems(){
    return JSON.parse(localStorage.getItem('items') || '[]');
  }


}
