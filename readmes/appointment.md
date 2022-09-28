## Project EMR - Electronic Medical Record

## 🩺&nbsp; Appointment

![Appointment](readme_images/emr_appointment.gif)

The appointments section is the part where the patient appointments data is listed, created, edited and deleted. Here you can find information regarding each service performed.

The business rule here is based on two components in Angular. The first component (appointment) is responsible for presenting a list interface with inputs for searching and inserting new users. The second component (new-appointment) consists of a group of inputs that capture patient information.

There is a service in Angular (appointment.service.ts) responsible for making requests to the back-end (Spring) where it handles the information and returns the requested data.

Regarding the back-end responsible for the services, a Controller class (AppointmentController), a Model class (Appointment) and an interface responsible for the repository (IAppointmentRepository) are involved.

The Appointment class is a class that inherits another class MaturityLevel3Richardson, responsible for implementing the characteristics necessary for a maturity level 3 API. It also implements the attributes necessary for a service and is linked to the database so that the Controller can access and manipulate the data in the database.

The IAppointmentRepository interface inherits the JpaRepository which is responsible for implementing the complete API for CRUD.

In the AppointmentController class are the CRUD methods related to the calls, through which the HTTP actions are executed with their respective returns and Status. Through these methods the data in the database, in this case MySql, are manipulated as defined.