## Project EMR - Electronic Medical Record

## 👩‍🔬&nbsp; Doctor

![Doctor](readme_images/emr_doctor.gif)

The doctors section is the part where the doctors data is listed, created, edited and deleted. Here you can find personal information, in addition to the total list of services.

The business rule here is based on two components in Angular. The first component (doctor) is responsible for presenting a list interface with inputs for searching and inserting new patients. The second component (new-doctor) consists of a group of inputs that capture patient information.

There is a service in Angular (doctor.service.ts) responsible for making requests to the back-end (Spring) where it handles the information and returns the requested data.

Regarding the back-end responsible for the services, a Controller class (DoctorController), a Model class (Doctor) and an interface responsible for the repository (IDoctorRepository) are involved.

The Doctor class is a class that inherits another class MaturityLevel3Richardson, responsible for implementing the characteristics necessary for a level 3 maturity API. It also implements the attributes necessary for a service and is linked to the database so that the Controller can access and manipulate the data in the database.

The IDoctorRepository interface inherits the JpaRepository which is responsible for implementing the complete API for CRUD.

In the DoctorController class are the CRUD methods related to the calls, through which the HTTP actions are executed with their respective returns and Status. Through these methods the data in the database, in this case MySql, are manipulated as defined.