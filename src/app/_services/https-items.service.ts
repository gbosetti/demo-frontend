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
  	this.url = "http://localhost:3000/api/";
  }

  getItems():Observable<Item[]>{

  	return new Observable((observable) => {

  		this.http.post(this.url + "customusers/login", {
		  "username": "admin",
		  "password": "admin"
		}).subscribe(response => {

			console.log(response);
			var token = response["id"];

			var headers = {headers: new HttpHeaders({
		  		"ContentType": "application/json",
		  		"Authentication": token
		  	})};

		  	//this.http.get<Item[]>(this.url, headers);

		  	//observable.next(this.items);
  			observable.complete();
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
