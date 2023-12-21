# CRUDAPP
## How to run this code?
- Please install all the missing packages with the following commands in CMD:
```console
npm install -g @angular/cli
npm i -g json-server  
npm install --save-dev jasmine
npm i karma
``` 
- Use the following command to run the web app in a browser:
```console
ng serve -o
``` 
- Then open another terminal and use this command to start the json-server with the database
```console
json-server --watch db.json
```
- If you want to run the tests, **please start the json-server first** and then open a new terminal to run this command:
```console
ng test
```
- You might need to remove these files to run the previous commands:
  - C:\Users\USERNAME\AppData\Roaming\npm\ng.ps1
  - C:\Users\USERNAME\AppData\Roaming\npm\json-server.ps1
# Steps
## Introduction
This project is an exercise requested for a job position. Throughout the development of this app, I intend to learn more about web applications with Angular, JSON-server and testing with Jasmine and TDD.

## Development steps
### 1. Understand the requested business:
After reading the task description, I understand that I need to create a CRUD(Create, Read, Update and Delete) application with Angular. This CRUD application handles management of instances of the Person object. A Person object has the following attributes: ID, Vorname, Nachname and E-Mail-Adresse. The user should be able to create a Person, list the existing instances of Person by the Vorname/Nachname attribute, edit a Person instance and also remove a Person instance from the list.

### 2. "Google is so powerful when you know how to use it." :
I was told this sentence by my supervisor when I used to ask them too many questions, and indeed I could find many resources that explain how to use Angular to build a simple UI to visualize my business/model. This UI has a button that opens a form that we can later use to fill in a Person's attributes, and also a part where we can see all the existing instances of Person, edit and delete them. Also a fake backend was implemented with json-server that provides a database to save the Person data.

### 3. What can we test?
Before starting this project I had some previous experience with writing Unit tests. I started reading and watching youtube videos on testing and I learned about more testing methods that could be applied to this project. I decided to start with testing the major task which the CRUD functionality, and if there's time I could write tests for the UI components and maybe e2e tests. 

### 4. Database
To save the Person objects, json-server was used to provide a json Database which I use to add and keep the objects. Inside the database we have a /persons path in which we keep the Person objects as json objects with the attributes: firstName, lastName, email, id. 

### 5.CRUD Testing:
Through testing we need to make sure that the different CRUD functions are working fine.
#### Create: 
It should be tested that:
- A Person was created and added to the DB successfully and it exists there.
- A Person cannot be added to the DB if it already exists in it (same E-mail).
#### Read:
It should be tested that:
- A person can be read successfully with all its attributes after being added to the DB.

#### Update:
It should be tested that:
- The attributes of a Person can be edited successfully and the DB is also holding the last updated version of the Person instance.

#### Delete:
It should be tested that:
- The attributes of a Person can be deleted successfully and the DB is no longer containing that Person.



### 6. Writing tests
I'm using Jasmine to write unit tests for both UI and the API. 
#### UI Tests
    Default UI Tests were kept and configured to run successfully

### 7. Coding depends on tests
Every time I change some code, I check the status of the tests and see if all of them pass or not, and investigate why some of them are not passing. This way I make sure that my development is driven by the tests status.




## Notes:
- I had issues running tests with mat-toolbar, I have a question for that on stackoverflow. [Question](https://stackoverflow.com/questions/77669494/testing-angular-with-template-containing-mat-toolbar/77669511#77669511)
- It's always important to remember to include all the modules of injected classed in the test files.
- For CRUD Testing, I found this interesting [article](https://jenijoe.medium.com/unit-testing-angular-crud-service-with-jasmine-7e40e7c8aa74).
- I thought of excluding the id property from the input form because it will make the code more complicated (to validate the existance of a user with the same id), but eventaully I decided to keep and invest time in learning how to handle this validation.
