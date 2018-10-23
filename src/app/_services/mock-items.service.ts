import { Injectable } from '@angular/core';
import { AbstractItemsService } from "./abstract-items.service";
import {Observable} from "rxjs";
import {Item } from "../../_modelo/Item";

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {
  items: Item[];

  constructor() { 

  	super();
  	this.items = [
  		new Item("comprar carne 1"),
  		new Item("comprar verdura 1"),
  		new Item("comprar carbón 1")
  	]
  }

  getItems():Observable<Item[]>{
  	return new Observable((observable) => {

  		observable.next(this.items);
  		observable.complete();
  	});
  };

  remove(item: Item):Observable<Item[]>{

  	return new Observable((observable) => {
  		console.log("borrando desde el servicio");
  		this.items = this.items.filter(it => it !== item);
  		observable.next(this.items);
  		observable.complete();
  	});
  }

  addItem(item: Item):Observable<Item[]>{

  	return new Observable((observable) => {
  		
  		this.items.push(item);

  		observable.next(this.items);
  		observable.complete();
  	});
  }
}
