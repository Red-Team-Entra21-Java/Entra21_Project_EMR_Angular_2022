import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  path: string = "https://pokeapi.co/api/v2"  //URL DA API


  patients: Array<any> = [
      {
          name: "Sheldon Cooper",
          cpf: "036.869.260-40",
          motherName: "Mary Cooper",
          fatherName: "George Cooper",
          genre: "Male",
          birthDate: "1980-02-26",
          streetName: "Av Los Robles Avenue",
          numberHome: 2311,
          district: "Central",
          city: "Pasadena",
          state: "California",
          country: "EUA",
          appointments: ['a','b','c']
      },
      {
          name: "Joana da Silva",
          cpf: "502.680.680-54",
          motherName: "Julia Garcia",
          fatherName: "Joao da Silca",
          genre: "Female",
          birthDate: "1991-01-01",
          streetName: "Rua 456",
          numberHome: 28,
          district: "Decimal",
          city: "Numerais",
          state: "Sao Paulo",
          country: "Brasil",
          appointments: ['a','b','c','d']
      },
      {
          name: "Cleber Silveira",
          cpf: "163.514.890-16",
          motherName: "Carla Silva Garcia",
          fatherName: "Olindio Silveira",
          genre: "Male",
          birthDate: "1995-04-13",
          streetName: "Rua 456",
          numberHome: 218,
          district: "Decimal",
          city: "Numerais",
          state: "Sao Paulo",
          country: "Brasil",
          appointments: ['a','b','c','d','e']
      },
      {
          name: "Silvana Github",
          cpf: "763.323.270-65",
          motherName: "Olivia Github",
          fatherName: "Linus Github",
          genre: "Male",
          birthDate: "2006-10-06",
          streetName: "Rua Versionamento",
          numberHome: 21,
          district: "Git",
          city: "Online",
          state: "Santa Catarina",
          country: "Brasil",
          appointments: ['a','b']
      },
  ]

  constructor(
      private http: HttpClient
  ) { }

  listPatient(patient: string) {
      console.log(this.path + "/patient/" + patient);

      return this.http.get<any>(this.path + "/patient/" + patient)
  }
}
