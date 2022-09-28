## Project EMR - Electronic Medical Record

## 👨🏻‍💻&nbsp; User

![User](/emr_angular/src/assets/images/readme_images/emr_user.gif)

The users section is the part where user data is listed, created, edited and deleted. Here you can find your personal information.

The business rule here is based on two components in Angular. The first component (user) is responsible for presenting a list interface with inputs for searching and inserting new users. The second component (new-user) consists of a group of inputs that capture patient information.

There is a service in Angular (user.service.ts) responsible for making requests to the back-end (Spring) where it handles the information and returns the requested data.

Regarding the back-end responsible for the services, a Controller class (UserController), a Model class (User) and an interface responsible for the repository (IUserRepository) are involved.

The User class is a class that inherits another class MaturityLevel3Richardson, responsible for implementing the necessary characteristics for a maturity level 3 API. It also implements the attributes necessary for a service and is linked to the database so that the Controller can access and manipulate the data in the database.

The IUserRepository interface inherits the JpaRepository which is responsible for implementing the complete API for CRUD.

In the UserController class are the CRUD methods related to the calls, through which the HTTP actions are executed with their respective returns and Status. Through these methods the data in the database, in this case MySql, are manipulated as defined.
