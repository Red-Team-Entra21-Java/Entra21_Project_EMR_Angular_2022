import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  path: string = "https://pokeapi.co/api/v2"

  constructor(
    private http: HttpClient
  ) { }

  listPatient(pokemon:string) {
    console.log(this.path+"/pokemon/"+pokemon);
    
    return this.http.get<any>(this.path+"/pokemon/"+pokemon)
  }

  // listPatient(index:number) {
  //   console.log(this.path+"/"+index);
    
  //   return this.http.get<any>(this.path+"/"+index)
  // }

}
