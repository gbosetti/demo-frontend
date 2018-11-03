import { Injectable } from '@angular/core';
import { AbstractItemsService } from "./abstract-items.service";
import {Observable} from "rxjs";
import {Item } from "../../_modelo/Item";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpsItemsService extends AbstractItemsService {

	url:string;

  constructor(private http: HttpClient) { 
  	super();
  	this.url = "localhost:3000/api/";
  }

  getHeadersWith(token){

    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
  }

  getItems():Observable<Item[]>{

  	return new Observable((observable) => {

    		this.http.post("http://" + this.url + "customusers/login", {
  		  "username": "admin",
  		  "password": "nimda"
  		}).subscribe(response => {

  			var token = response["id"];
  			var headers = this.getHeadersWith(token); 

        this.http.get<Item[]>("http://" + this.url + "items", headers).subscribe(itemsFromBackend => {

            console.log("Items logueados desde el servicio", itemsFromBackend);
            observable.next(itemsFromBackend);
            observable.complete();
        });
  		});	
  	});	  	
  };

  remove(item: Item):Observable<Item[]>{

  	return new Observable((observable) => {

  		observable.next();
  		observable.complete();
  	});
  }

}
