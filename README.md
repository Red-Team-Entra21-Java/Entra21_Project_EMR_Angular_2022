# README (1)

## **Project EMR - Electronic Medical Record**

## **🗃️ Table of Contents**

- [About the project](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022#about-project)
- [Class diagram](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022#class-diagram)
- [Application flowchart](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022#application-flowchart)
- [Application in operation](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022#application-operation)
- [Instructions for execute the Project](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022#execute-project)
- [Technologies and Concepts](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022#technologies)
- [Author](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022#author)

---

## **🏥 About the project**

O EMR é um sistema de prontuário eletrônico que tem por finalidade tratar da gestão de pequenas clínicas e consultórios de atendimento médico.

Focado na gestão de prontuários eletrônicos, é capaz de armazenar e gerenciar as informações relativas aos pacientes durante os ciclos de atendimentos. Com o histórico é possível ao profissional de saúde conhecer as pessoalidades do quadro do seu paciente e assim tomar melhores decisões.

Outro ponto importante está relacionado a emissão de documentação impressa, assim anulando a possibilidade de erros causados com problemas de interpretação de caligrafia.

---
<br>

## 📈 **Application Structure Front-end**

![Structure 01](./readme_images/structure_01.png)
> Front-end Application Structure

<br>

![Structure 02](./readme_images/structure_02.png)

> Front-end Application Structure (Logged)

<br>

## 📈 **Application Structure Back-end**

![Structure 03](./readme_images/structure_03.png)

> Back-end Application Structure

<br>

![Class Diagrama BackEnd EMR](./readme_images/Diagrama_BackEnd_EMR.png)

> Back-end Class Diagram

<br>

## 🔀&nbsp; **Application flowchart**

The system flow is based on the concept:
- Patient ➡️ Medical Record ➡️ Appointment 

<details>
    <summary><b>👈🏽 &nbsp; Click here to expand the flowchart </b></summary>

![Flowchart](./readme_images/application_flowchart.png)

</details>

</br>

----

## ▶️  **Application in operation**

![electronic_medical_record.gif](./readme_images/electronic_medical_record.gif)

----

## **🔀 Application Sections**

<details>
    <summary>
        <b>&nbsp; Start</b>
    </summary>

# 🏥&nbsp; Start

This is the set of home pages, consisting of the home, login and user registration.

![EMR_initial](./readme_images/emr_start.gif)

## **Home**

The initial pages try to show a harmonic layout, using colors related to the health environment.
Through the home pages it is possible to navigate to the login, user registration, about and contact sections.

In the construction of the initial pages, the technologies of HTML, CSS and TS were used, through the Angular framework.

## **Login**

In the logic used in the login component, we have a page that is capable of re-rendering two components, which may or may not be called based on a defined business rule to identify whether there is a default login or registration of a new user.

In the login component there is a complete logic developed to validate attempts to enter the system. The component has a method capable of communicating with the backend and verifying the users registered in the database (MySql). Once the communication has been carried out, there is a method that verifies the inputs and allows or not the users to enter the system.

If so, the component sends to the service responsible for the system a boolean that says if there is an active login and for a string variable the name of the active user.

## **Record User**

The registration component is rendered on a page prepared to show it or the login component.

The logic used communicates with the back-end and through the User class, UserController and the IUserRepository interface manages the information and persists the data in the database (MySql), all through a Spring Boot.

</details>

<details>
    <summary>
        <b>&nbsp; Appointment CRUD</b>
    </summary>

## 🩺&nbsp; Appointment

![Appointment](./readme_images/emr_appointment.gif)

The appointments section is the part where the patient appointments data is listed, created, edited and deleted. Here you can find information regarding each service performed.

The business rule here is based on two components in Angular. The first component (appointment) is responsible for presenting a list interface with inputs for searching and inserting new users. The second component (new-appointment) consists of a group of inputs that capture patient information.

There is a service in Angular (appointment.service.ts) responsible for making requests to the back-end (Spring) where it handles the information and returns the requested data.

Regarding the back-end responsible for the services, a Controller class (AppointmentController), a Model class (Appointment) and an interface responsible for the repository (IAppointmentRepository) are involved.

The Appointment class is a class that inherits another class MaturityLevel3Richardson, responsible for implementing the characteristics necessary for a maturity level 3 API. It also implements the attributes necessary for a service and is linked to the database so that the Controller can access and manipulate the data in the database.

The IAppointmentRepository interface inherits the JpaRepository which is responsible for implementing the complete API for CRUD.

In the AppointmentController class are the CRUD methods related to the calls, through which the HTTP actions are executed with their respective returns and Status. Through these methods the data in the database, in this case MySql, are manipulated as defined.

</details>

<details>
    <summary>
        <b>&nbsp; Patient CRUD</b>
    </summary>

## 😷&nbsp; Patient

![Patient](./readme_images/emr_patient.gif)

The patient section is the part where patient data is listed, created, edited and deleted. Here you can find personal information, in addition to the total list of services.

The business rule here is based on two components in Angular. The first component (patient) is responsible for presenting a list interface with inputs for searching and inserting new patients. The second component (new-patient) consists of a group of inputs that capture patient information.

There is a service in Angular (patient.service.ts) responsible for making requests to the back-end (Spring) where it handles the information and returns the requested data.

Regarding the back-end responsible for the services, a Controller class (PatientController), a Model class (Patient) and an interface responsible for the repository (IPatientRepository) are involved.

The Patient class is a class that inherits another MaturityLevel3Richardson class, responsible for implementing the necessary characteristics for a maturity level 3 API. It also implements the attributes necessary for a service and is linked to the database so that the Controller can access and manipulate the data in the database.

The IPatientRepository interface inherits the JpaRepository which is responsible for implementing the complete API for CRUD.

In the PatientController class are the CRUD methods related to the calls, through which the HTTP actions are performed with their respective returns and Status. Through these methods the data in the database, in this case MySql, are manipulated as defined.

</details>

<details>
    <summary>
        <b>&nbsp; Doctor CRUD</b>
    </summary>

## 👩‍🔬&nbsp; Doctor

![Doctor](./readme_images/emr_doctor.gif)

The doctors section is the part where the doctors data is listed, created, edited and deleted. Here you can find personal information, in addition to the total list of services.

The business rule here is based on two components in Angular. The first component (doctor) is responsible for presenting a list interface with inputs for searching and inserting new patients. The second component (new-doctor) consists of a group of inputs that capture patient information.

There is a service in Angular (doctor.service.ts) responsible for making requests to the back-end (Spring) where it handles the information and returns the requested data.

Regarding the back-end responsible for the services, a Controller class (DoctorController), a Model class (Doctor) and an interface responsible for the repository (IDoctorRepository) are involved.

The Doctor class is a class that inherits another class MaturityLevel3Richardson, responsible for implementing the characteristics necessary for a level 3 maturity API. It also implements the attributes necessary for a service and is linked to the database so that the Controller can access and manipulate the data in the database.

The IDoctorRepository interface inherits the JpaRepository which is responsible for implementing the complete API for CRUD.

In the DoctorController class are the CRUD methods related to the calls, through which the HTTP actions are executed with their respective returns and Status. Through these methods the data in the database, in this case MySql, are manipulated as defined.


</details>

<details>
    <summary>
        <b>&nbsp; User CRUD</b>
    </summary>

## 👨🏻‍💻&nbsp; User

![User](./readme_images/emr_user.gif)

The users section is the part where user data is listed, created, edited and deleted. Here you can find your personal information.

The business rule here is based on two components in Angular. The first component (user) is responsible for presenting a list interface with inputs for searching and inserting new users. The second component (new-user) consists of a group of inputs that capture patient information.

There is a service in Angular (user.service.ts) responsible for making requests to the back-end (Spring) where it handles the information and returns the requested data.

Regarding the back-end responsible for the services, a Controller class (UserController), a Model class (User) and an interface responsible for the repository (IUserRepository) are involved.

The User class is a class that inherits another class MaturityLevel3Richardson, responsible for implementing the necessary characteristics for a maturity level 3 API. It also implements the attributes necessary for a service and is linked to the database so that the Controller can access and manipulate the data in the database.

The IUserRepository interface inherits the JpaRepository which is responsible for implementing the complete API for CRUD.

In the UserController class are the CRUD methods related to the calls, through which the HTTP actions are executed with their respective returns and Status. Through these methods the data in the database, in this case MySql, are manipulated as defined.

</details>

<details>
    <summary>
        <b>&nbsp; Reports</b>
    </summary>

## 📊&nbsp; Reports



</details>

<br>

---

## **👨🏽‍🏫 Instructions for execute the Project**

## **Angular**

1. Make a project copy to your machine:
    - git clone [https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022)
    - Or a direct download from the page [HERE](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Angular_2022).
    - Import the project into your VSCode.
        - If you don't have VSCode installed, watch this video I recorded teaching you how to install it. [VIEW VIDEO](https://youtu.be/82GnguThEAQ).
    - The node must be installed.
        - If you don't have node installed, go to the page and download it according to your operating system.
        - Node download page [HERE](https://nodejs.org/en/).
    - Angular CLI must be installed.
        - If the Angular CLI is not installed it will be necessary to install it, for that node must be installed. Run the following command in your terminal:
    
    `npm install -g @angular/cli@latest`
    
    - After performing the previous steps, it will be necessary to install the dependencies used in the project, with the project page open in the terminal, run:
    
    `npm install`
    
    - With everything ready, just run the ng serve command and open the link provided in the browser of your choice.
    
    `ng serve`
    

## **Spring**


## **MySql**
<br>

---

### **The back-end version of the project developed in SPRING can be found [HERE](https://github.com/Red-Team-Entra21-Java/Entra21_Project_EMR_Spring_2022).**

## **📚 Technologies and Concepts**

In this project we use Angular framework with HTML5, CSS3, Bootstrap and apply the following concepts:

1. Git
2. HTML
3. CSS
4. JAVA
5. Angular
6. Spring 
7. Agile Methodologies
8. Kanban

****👨🏻‍🎓  Authors****

<br>

<table>
<thead>
	<tr>
		<th>
            <a href="https://seiler-emerson.github.io/">
                <img style="border-radius: 10px" src="https://avatars.githubusercontent.com/seiler-emerson" width="100px;" alt=""/>
            </a>
        </th>
		<th>
            <img style="border-radius: 10px;" src="https://avatars.githubusercontent.com/Wellitonborges" width="100px;" alt=""/>
        </th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>
            <a href="https://www.linkedin.com/in/seileremerson/">
                <img src="https://img.shields.io/badge/-seileremerson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/seileremerson/" width="100px;" alt=""/>
            </a>
        </td>
		<td>
            <a href="https://www.linkedin.com/in/welliton-borges-904331190/">
                <img src="https://img.shields.io/badge/-wellitonborges-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/welliton-borges-904331190/" width="100px;" alt=""/>
            </a>
        </td>
	</tr>
</tbody>
</table>

<br>

---