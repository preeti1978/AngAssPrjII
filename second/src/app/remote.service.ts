import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//function to remotely read the data.json file through promise
@Injectable()
export class RemoteService{
constructor(private http:Http){
}

getData(){
  return this.http.get("app/data.json").toPromise().then(function(response){
    return response.json();
	}
)
.catch(function(error){
return error;
})

 }
}

