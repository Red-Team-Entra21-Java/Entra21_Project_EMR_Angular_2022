import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  path: string = "https://pokeapi.co/api/v2"

  appointments = [
    {
      date: "2022-01-02",
      hour: "01:15:00",
      doctor: "Rafael Silva",
      patient: "Sheldon Cooper",
      patientCPF: "036.869.260-40",
      anamnesis: "Dor abdominal",
      prescription: "laxante - 8/8h - 1 dia",
      certificate: "Atestado",
      forwarding: "encaminhamento para gastro",
      medicalRealise: "Liberado"
    },
    {
      date: "2022-01-02",
      hour: "01:15:00",
      doctor: "Calos Francesconi",
      patient: "Sheldon Cooper",
      patientCPF: "036.869.260-40",
      anamnesis: "Dor abdominal",
      prescription: "laxante - 8/8h - 1 dia",
      certificate: "Atestado",
      forwarding: "encaminhamento para gastro",
      medicalRealise: "Liberado"
    },
    {
      date: "2022-01-02",
      hour: "01:15:00",
      doctor: "Isabel Carolina",
      patient: "Joana da Silva",
      patientCPF: "502.680.680-54",
      anamnesis: "Dor abdominal",
      prescription: "laxante - 8/8h - 1 dia",
      certificate: "Atestado",
      forwarding: "encaminhamento para gastro",
      medicalRealise: "Liberado"
    },
    {
      date: "2022-01-02",
      hour: "01:15:00",
      doctor: "Afonso Alonso",
      patient: "Joana da Silva",
      patientCPF: "502.680.680-54",
      anamnesis: "Dor abdominal",
      prescription: "laxante - 8/8h - 1 dia",
      certificate: "Atestado",
      forwarding: "encaminhamento para gastro",
      medicalRealise: "Liberado"
    },
    {
      date: "2022-01-02",
      hour: "01:15:00",
      doctor: "Rafael Silva",
      patient: "Cleber Silveira",
      patientCPF: "163.514.890-16",
      anamnesis: "Dor abdominal",
      prescription: "laxante - 8/8h - 1 dia",
      certificate: "Atestado",
      forwarding: "encaminhamento para gastro",
      medicalRealise: "Liberado"
    },
    {
      date: "2022-01-02",
      hour: "01:15:00",
      doctor: "Rafael Silva",
      patient: "Cleber Silveira",
      patientCPF: "163.514.890-16",
      anamnesis: "Dor de cabeca",
      prescription: "paracetamol - 8/8h - se dor",
      certificate: "Declaracao de comparecimento",
      forwarding: "encaminhamento para neuro",
      medicalRealise: "Liberado"
    },
    {
      date: "2022-01-02",
      hour: "01:15:00",
      doctor: "Afonso Alonso",
      patient: "Cleber Silveira",
      patientCPF: "163.514.890-16",
      anamnesis: "Dor abdominal",
      prescription: "laxante - 8/8h - 1 dia",
      certificate: "Atestado",
      forwarding: "encaminhamento para gastro",
      medicalRealise: "Liberado"
    },
  ]

  constructor(
    private http: HttpClient
  ) { }

  listAppointments(appointments: string) {
    console.log(this.path + "/appointments/" + appointments);

    return this.http.get<any>(this.path + "/appointments/" + appointments)
  }

}
