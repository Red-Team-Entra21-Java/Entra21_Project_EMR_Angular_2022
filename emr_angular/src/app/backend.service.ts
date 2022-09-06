import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    path: string = "https://pokeapi.co/api/v2"
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
            appointments: [
                {
                    date: "2022-01-02",
                    hour: "01:15:00",
                    //doctor: doctor[1].name,
                    anamnesis: "Dor abdominal",
                    prescription: "laxante - 8/8h - 1 dia",
                    certificate: "Atestado",
                    forwarding: "encaminhamento para gastro",
                    medicalRealise: "Liberado"
                },
                {
                    date: "2022-01-02",
                    hour: "01:15:00",
                    //doctor: doctor[2].name,
                    anamnesis: "Dor abdominal",
                    prescription: "laxante - 8/8h - 1 dia",
                    certificate: "Atestado",
                    forwarding: "encaminhamento para gastro",
                    medicalRealise: "Liberado"
                },
            ]
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
            appointments: [
                {
                    date: "2022-01-02",
                    hour: "01:15:00",
                    //doctor: doctor[1].name,
                    anamnesis: "Dor abdominal",
                    prescription: "laxante - 8/8h - 1 dia",
                    certificate: "Atestado",
                    forwarding: "encaminhamento para gastro",
                    medicalRealise: "Liberado"
                },
                {
                    date: "2022-01-02",
                    hour: "01:15:00",
                    //doctor: doctor[1].name,
                    anamnesis: "Dor abdominal",
                    prescription: "laxante - 8/8h - 1 dia",
                    certificate: "Atestado",
                    forwarding: "encaminhamento para gastro",
                    medicalRealise: "Liberado"
                },
            ]
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
            appointments: [
                {
                    date: "2022-01-02",
                    hour: "01:15:00",
                    //doctor: doctor[1].name,
                    anamnesis: "Dor abdominal",
                    prescription: "laxante - 8/8h - 1 dia",
                    certificate: "Atestado",
                    forwarding: "encaminhamento para gastro",
                    medicalRealise: "Liberado"
                },
                {
                    date: "2022-01-02",
                    hour: "01:15:00",
                    //doctor: doctor[2].name,
                    anamnesis: "Dor de cabeca",
                    prescription: "paracetamol - 8/8h - se dor",
                    certificate: "Declaracao de comparecimento",
                    forwarding: "encaminhamento para neuro",
                    medicalRealise: "Liberado"
                },
                {
                    date: "2022-01-02",
                    hour: "01:15:00",
                    //doctor: doctor[0].name,
                    anamnesis: "Dor abdominal",
                    prescription: "laxante - 8/8h - 1 dia",
                    certificate: "Atestado",
                    forwarding: "encaminhamento para gastro",
                    medicalRealise: "Liberado"
                },
            ]
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
            appointments: [
                {
                    date: "2022-01-02",
                    hour: "01:15:00",
                    //doctor: doctor[2].name,
                    anamnesis: "Dor de cabeca",
                    prescription: "paracetamol - 8/8h - se dor",
                    certificate: "Declaracao de comparecimento",
                    forwarding: "encaminhamento para neuro",
                    medicalRealise: "Liberado"
                },
                {
                    date: "2022-01-02",
                    hour: "01:15:00",
                    //doctor: doctor[0].name,
                    anamnesis: "Dor abdominal",
                    prescription: "laxante - 8/8h - 1 dia",
                    certificate: "Atestado",
                    forwarding: "encaminhamento para gastro",
                    medicalRealise: "Liberado"
                },
            ]
        },
    ]
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
            speciality: "Clinico Geral",
            numberAppointments: 23,
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
            speciality: "Cardiologista",
            numberAppointments: 31
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
            speciality: "Obstetra",
            numberAppointments: 19
        }
    ]


    constructor(
        private http: HttpClient
    ) { }

    listPatient(patient: string) {
        console.log(this.path + "/patient/" + patient);

        return this.http.get<any>(this.path + "/patient/" + patient)
    }
    
    listDoctor(doctor: string) {
        console.log(this.path + "/doctor/" + doctor);

        return this.http.get<any>(this.path + "/doctor/" + doctor)
    }

    // listPatient(index:number) {
    //   console.log(this.path+"/"+index);

    //   return this.http.get<any>(this.path+"/"+index)
    // }

}
