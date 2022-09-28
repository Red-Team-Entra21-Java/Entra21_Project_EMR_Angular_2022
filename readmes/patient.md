## Project EMR - Electronic Medical Record

## 😷&nbsp; Patient

![Patient](readme_images/emr_patient.gif)

The patient section is the part where patient data is listed, created, edited and deleted. Here you can find personal information, in addition to the total list of services.

The business rule here is based on two components in Angular. The first component (patient) is responsible for presenting a list interface with inputs for searching and inserting new patients. The second component (new-patient) consists of a group of inputs that capture patient information.

There is a service in Angular (patient.service.ts) responsible for making requests to the back-end (Spring) where it handles the information and returns the requested data.

Regarding the back-end responsible for the services, a Controller class (PatientController), a Model class (Patient) and an interface responsible for the repository (IPatientRepository) are involved.

The Patient class is a class that inherits another MaturityLevel3Richardson class, responsible for implementing the necessary characteristics for a maturity level 3 API. It also implements the attributes necessary for a service and is linked to the database so that the Controller can access and manipulate the data in the database.

The IPatientRepository interface inherits the JpaRepository which is responsible for implementing the complete API for CRUD.

In the PatientController class are the CRUD methods related to the calls, through which the HTTP actions are performed with their respective returns and Status. Through these methods the data in the database, in this case MySql, are manipulated as defined.
