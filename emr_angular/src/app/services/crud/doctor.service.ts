import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  path: string = "https://pokeapi.co/api/v2"
  updateButtonHidden: boolean = true;
  indexUpdateDoctor!: number;
  
  doctors = [
      {
          name: "Rafael da Silva",
          cpf: "145.345.345-34",
          motherName: "Julia Silva",
          fatherName: "Carlos da Silva",
          genre: "male",
          birthDate: "1975-04-30",
          streetName: "Rua Barao",
          numberHome: "123",
          district: "Centro",
          city: "São Paulo",
          state: "São Paulo",
          country: "Brasil",
          registerNumber: "123456-9/RR",
          specialty: "Clinico Geral",
          numberAppointments: "23",
      },
      {
          name: "Carlos Francesconi",
          cpf: "343.335.329-81",
          motherName: "Elisandra Francesconi",
          fatherName: "Mateus Francesconi",
          genre: "male",
          birthDate: "1965-03-13",
          streetName: "Rua Irati",
          numberHome: "123",
          district: "Centro",
          city: "Itajaí",
          state: "Santa Catarina",
          country: "Brasil",
          registerNumber: "32455-9/SC",
          specialty: "Cardiologista",
          numberAppointments: "31"
      },
      {
          name: "Maria Silva",
          cpf: "745.468.345-84",
          motherName: "Carla Silva",
          fatherName: "Clovis Silva",
          genre: "female",
          birthDate: "1986-09-14",
          streetName: "Rua Conselheiro",
          numberHome: "3476",
          district: "Rocio",
          city: "Itajaí",
          state: "Santa Catarina",
          country: "Brasil",
          registerNumber: "9836745-9/PR",
          specialty: "Obstetra",
          numberAppointments: "19"
      }
  ]

  constructor(
      private http: HttpClient
  ) { }

  listDoctor(doctor: string) {
      console.log(this.path + "/doctor/" + doctor);

      return this.http.get<any>(this.path + "/doctor/" + doctor)
  }
}
