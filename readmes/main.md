## Project EMR - Electronic Medical Record

# 🏥&nbsp; Start

This is the set of home pages, consisting of the home, login and user registration.

![EMR_initial](readme_images/emr_initial.gif)

## Home

The initial pages try to show a harmonic layout, using colors related to the health environment.
Through the home pages it is possible to navigate to the login, user registration, about and contact sections.

In the construction of the initial pages, the technologies of HTML, CSS and TS were used, through the Angular framework.

## Login

In the logic used in the login component, we have a page that is capable of re-rendering two components, which may or may not be called based on a defined business rule to identify whether there is a default login or registration of a new user.

In the login component there is a complete logic developed to validate attempts to enter the system. The component has a method capable of communicating with the backend and verifying the users registered in the database (MySql). Once the communication has been carried out, there is a method that verifies the inputs and allows or not the users to enter the system.

If so, the component sends to the service responsible for the system a boolean that says if there is an active login and for a string variable the name of the active user.

## Record User

The registration component is rendered on a page prepared to show it or the login component.

The logic used communicates with the back-end and through the User class, UserController and the IUserRepository interface manages the information and persists the data in the database (MySql), all through a Spring Boot.



