# CRUDAPP
## Introduction
This project is an exercise requested for a job position. Throughout the development of this app, I intend to learn more about web applications with Angular, JSON-server and testing with Jasmine and TDD.

## Development steps
### 1. Understand the requested business:
After reading the task description, I understand that I need to create a CRUD(Create, Read, Update and Delete) application with Angular. This CRUD application handles management of instances of the Person object. A Person object has the following attributes: ID, Vorname, Nachname and E-Mail-Adresse. The user should be able to create a Person, list the existing instances of Person by the Vorname/Nachname attribute, edit a Person instance and also remove a Person instance from the list.

### 2. "Google is so powerful when you know how to use it." :
I was told this sentence by my supervisor when I used to ask them too many questions, and indeed I could find many resources that explain how to use Angular to build a simple UI to visualize my business/model. This UI has a button that opens a form that we can later use to fill in a Person's attributes, and also a part where we can see all the existing instances of Person, edit and delete them. Also a fake backend was implemented with json-server that provides a database to save the Person data.

### 3. What can we test?
Before starting this project I had some previous experience with writing Unit tests. I started reading and watching youtube videos on testing and I learned about more testing methods that could be applied to this project. I decided to start with testing the major task which the CRUD functionality, and if there's time I could write tests for the UI components and maybe e2e tests. 


### 4.CRUD Testing:
Through testing we need to make sure that the different CRUD functions are working fine.
#### Create: 
It should be tested that:
- A Person was created and added to the DB successfully and it exists there.
- A Person cannot be added to the DB if it already exists in it (same E-mail or same ID).
#### Read:
It should be tested that:
- A person can be read successfully with all its attributes after being added to the DB.

#### Update:
It should be tested that:
- The attributes of a Person can be edited successfully and the DB is also holding the last updated version of the Person instance.

#### Delete:
It should be tested that:
- The attributes of a Person can be edited successfully and the DB is also holding the last updated version of the Person instance.



### 5. Writing tests
#### UI Tests

#### CRUD Tests



## Notes:
- I had issues running tests with mat-toolbar, I have a question for that on stackoverflow. [Question](https://stackoverflow.com/questions/77669494/testing-angular-with-template-containing-mat-toolbar/77669511#77669511)
- It's always important to remember to include all the modules of injected classed in the test files.
- For CRUD Testing, I found this interesting [article](https://jenijoe.medium.com/unit-testing-angular-crud-service-with-jasmine-7e40e7c8aa74).
- If you have time, please create a seperate class for Person object and try to clean the code.