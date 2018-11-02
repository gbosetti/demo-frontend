import { Component, OnInit } from '@angular/core';
import { Item } from "../../_modelo/Item";
import { MockItemsService } from "../_services/mock-items.service";
import { HttpsItemsService } from "../_services/https-items.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	items:Item[];

  constructor(private service: HttpsItemsService) {
  	this.service.getItems().subscribe(serviceItems => {
  		this.items = serviceItems;
  	});
  }

  ngOnInit() {
  }

  onRemove(item: Item){
  	this.service.remove(item).subscribe(serviceItems => {
  		this.items = serviceItems;
  	});
  }

}
