import { Plano } from './plano';

export class LocalStorageService{

  items:Array<Plano> = [];

  clear(): void{
    this.items = [];
  }

  addItem(item: Plano) : void {
    this.items = this.getItems();
    let foundItem = this.items.find((i) => i.id === item.id);
    if(!foundItem){
      this.items.push(item);
      localStorage.setItem('items',JSON.stringify(this.items));
      this.clear();
    }else{
      this.removeItem(item);
      this.items.push(item);
      localStorage.setItem('items',JSON.stringify(this.items));
    }
  }

  removeItem(item:Plano): void {
    this.items.splice(this.items.findIndex(i => i.id === item.id),1);
  }

  mostrarItems() : void {
    console.log("items",localStorage.getItem('items'));
  }

  getItems() : Array<Plano>{
    return JSON.parse(localStorage.getItem('items') || '[]');
  }


}
