![enter image description here](https://img.shields.io/badge/Author-Nestorbd-yellow)
![enter image description here](https://img.shields.io/badge/Author-GonzaloSS-purple)

# centralU-firstProject

This project will be developed for the central uniforme company.

The idea proposed for this project is to develop a mobile application for inventory management. This application will be used by operators responsible for counting products in different locations within a warehouse.

## 🚩 Table of Contents

* [Data model](#Data-Model)
* [User Requirements](#User-Requirements)
* [Use Case](#Use-Case)
* [Interfaces](#Interfaces)
* [Installation manual](#Installation-manual)
* [Comparison of technologies](#Comparison-of-technologies)
* [Planning](#Planing)
* [Tools](#-Tools)
* [Acknowledgments](#-Acknowledgments)

## Data Model
Here will be shown how the project database is organized.

### Overview
Here will be shown how the project database is organized.

* **Entities**

   In the database you will need to have the following fields:
 
   - Controller, who will have a primary key, name and password.

   - Responsible, who will have a primary key, name and password.

   - Operator, who will have a primary key, name and password.

   - Inventory, will have a primary key, name, date and status.

   - Products, will have a primary key, name, bar code and value.
   
   - Locations, will have a primary key and name.

   - Project, will have a primary key and name.

   - Task, will have a primary key, name, date and status. 
   

 * **Relatioships**

   - A controller can create zero or many inventories, but an inventory can only be created by a controller.

   - In an inventory, data for multiple products and locations will be saved.

   - Creating an inventory will also create a project, in which there will be several tasks and also an inventory manager will be assigned who will also manage the project.

   - Tasks will be assigned to operators where you will be told which products and locations you will need to review.

   - An operator can have zero or many tasks.

   - The products are will save in a location or in several locations.

 ### E/R Diagram
 ![E/R Diagram](https://github.com/GonzaloSS/centralU-firstProject/blob/develop/Documentation/DataModel/Proyecto%20Inventario%20C.U%20-%20E_R.png)

 ### Step from E/R to relational model
 Bold words are primary keys and those with an asterisk are foreign keys.

 * Inventory (**id**, name, date, status, id_controller*, id_responsible*).

        - id_controller is controller foreign key.
        - id_responsible is responsible foreign key.

 *  Controller (**id**, name, password).

 * Responsible (**id**, name, password).

 * Operator (**id**, name, password).

 * Project (**id**, name, id_inventory*, id_responsible*).

        - id_inventory is inventory foreign key.
        - id_responsible is responsible foreign key.

* Inventory_product (**id_inventory***, **id_product***).

        - id_inventory is inventory foreign key.
        - id_product is products foreign key.

* Inventory_locations (**id_inventory***, **id_location***).

        - id_inventory is inventory foreign key.
        - id_location is locations foreign key.

* Products (**id**, name, barCode, value).

* Locations (**id**, name).

* Products_locations (**id_product***,**id_locations***).

        - id_product is products foreign key.
        - id_location is locations foreign key.

* Tasks (**id**, name, date, status, id_proyect*, id_operator).

        - id_proyect is proyect foreign key.
        - id_operator is operator foreign key.

* Task_locations(**id_task***, **id_location***).

        - id_task is tasks foreign key.
        - id_location is locations foreign key.

* Products_tasks (**id_product***, **id_task***).

        - id_task is tasks foreign key.
        - id_product is products foreign key.

### Relational Model
![Relational Model](https://github.com/GonzaloSS/centralU-firstProject/blob/develop/Documentation/DataModel/Proyecto%20Inventario%20C.U%20-%20Modelo%20Relacional.png)

## User Requirements

* Platform

     - Mobile application.

* You cannot use the app if you are not registered.
* Those who are going to use the application are operators.

     - The operators will be in charge of counting products, so they will have to know where they are and the products they have to count.
     - Operators will not be able to change the data, only send data to be verified by a inventory manager.

*  Controller will be able to create inventories that be assigned to a responsible.
*  Responsible will be able to create tasks that will be assigned to the operators.
*  Controller and responsible may be the same person.

## Use Case
![Use Case](https://github.com/GonzaloSS/centralU-firstProject/blob/develop/Documentation/DataModel/Proyecto%20Inventario%20C.U%20-%20Diagrama%20de%20caso%20de%20uso.png)

## Architecture
The client will be installed on a mobile device from a launcher, no matter what operating system the mobile has.
In the client, each operator will be able to see his tasks and do them, when finished he must send the information to the server.

The server will have to be installed on a computer with windows or ubuntu operating system, and to install it you must follow the installation manual.
The server, which in this case is odoo, has its own interfaces to manipulate data and thanks to this feature the manager will be able to create inventories, tasks and assign them to the operators who will receive it in the client.


## Interfaces

### Mockup

### Usability

* Useful: that it is capable of fulfilling the specific tasks for which it has been designed. Example (Being an admin you can do a lot of features).

![Menu admin]()

* Easy to use: it must be efficient, fast and with as few errors as possible. Comfortable to use. You can understand easily the menus and the app.

![Menu scroll admin ]()

* Easy to learn: no excessive time is needed to learn how to work with the application and it is easy to remember how it works. Easy to understand.
* Elegant in its design: to favour the user's perception and emotions.
* It is efficient: It measures the effort to achieve an objective.
* The user must be able to initiate actions and control tasks.

![All tasks]()

* The user must be able to customize the interface, the use can change the theme between light and dark.
* Simplicity of design No overloading the interface with unnecessary elements The information in the interface will be the minimum essential The interface will be SIMPLE and easy to learn and remember.
* Feedback Appropriate response to user actions.
* Colour. Colour should be considered as an additional tool in design, not a basic need. A limited set of colours is recommended, with subtle, complementary, muted colours being most appropriate in the design of business and academic interfaces.
* Consistency. Whenever possible, the interface should be consistent. This implies that similar operations will have to be activated in the same way. Furthermore, ergonomics should be taken into account through menus, action bars and icons that are easy to access and identify.
* Usable. The user is able to initiate actions and control them, such as start and close session.
* Recallability. The interface must include mechanisms to allow users to recover from errors. Example (you as admin can edit the tracking of the user's order, you can cancel and recover from errors.
* Minimal surprise. The user will know at all times what he is doing, so he will not take no surprise.
* Security. The master password is stored in the database encrypted with bcrypt and the user password and token are base64-encoded.

![Security]()

## Installation manual
### Backend
First, we have to go to the official odoo page and download the [odoo 14 community for windows](https://www.odoo.com/es_ES/page/download).

Then, we run the file .Exe we downloaded and installed odoo, something like this will appear to us:

![Choose language]()
We choose a language and give it to Ok.

On the next page we give you to accept:
![Welcome Odoo page]()

Here we give to I agree:
![I agree]()

We select the two we give to next and we install it:
![Next and install]()

When you finish installing we give it to finish and odoo will open in http://localhost:8069.

With this, we would already have odoo installed, now we will install the necessary module for the app to work.

First, clone this repository somewhere on your pc with:

```
git clone https://github.com/GonzaloSS/centralU-firstProject.git

```
When finished, we go to the backend folder and copy what is inside it.

Now, we head to the place where odoo is unloaded, it is normally intala in C:\Program Files\Odoo14.

Once here, we open the server folder, then addons and paste there is what we had copied earlier.

Now, we open the windows services application, look for the odoo service and restart it.
![service restart]()

And with this we would have the server fully installed and ready for the client application.

### Frontend
To install the client we have to go back to the centralU-firstProject root directory and do what
following:

```
cd centralU-firstProject/frontend
npm install

```

And the client would be installed, now to start the application first we have
that boot the server and then the client, below I explain how it is done.
First you have to go back to the E-commerce root directory and do the following:

```
cd centralU-firstProject/backend
node server.js

```

Now we open another console in the root directory and do this:

```
cd centralU-firstProject/frontend
ionic serve

```
And that's it, we already have our application installed and working.

## User manual

In this section we will learn how to navigate the application and use it.

The first thing we will find when we start the application is with the following screen:

![Login]()

In this screen we can log in with the credentials that the company gives us.
Once the session is started you can see this menu:

![Initial Menu]()

In this menu you can select several options:

* [Ver Tareas](###Ver-Tareas)
* [Productos](###Productos)
* [Inventario](###Inventario)
* [LOG-OUT](###LOG-OUT)
* [Side menu](###Side-menu)

### Ver Tareas
In this option we can see our tasks. These are divided into to-do, in-progress and done:

![Tasks]()

### Productos
Here you can see the products that the company has:

![List Products]()

If you click on a product you will get more information:

![A Producte]()

### Inventario
Here you can see the current inventory adjustment.

![Inventory]()

### LOG-OUT
If you click on this button the session will be closed and we will return to the main screen.

### Side menu
If we drag the finger from left to right on any screen will come out a side menu with the same options as the main menu to make navigation easier.
The side menu will also have an option to change the theme of the application to dark.

![Side menu]()



## Comparison of technologies

### ODOO

Odoo is a suite of business management software tools including CRM, e-commerce, billing, accounting, manufacturing, warehouse, project management, and inventory management to name a few. The Community version is a libre software, licensed under the GNU LGPLv3. The Enterprise version has proprietary extra features and services. The source code for the framework and core ERP modules is curated by the Belgium-based Odoo S.A. Odoo is available for both on-premise and ready to use SaaS environment.

### IONIC

It is a framework that is becoming very popular lately. It is a tool
that programmers can use totally free, to develop
apps based on HTML5, CSS and JavaScript. It is built with Sass and optimized
for AngularJS. Adem as, is free and open source.

* Advantage
    
    * AngularJS
    
    Works perfectly with AngularJS. Giving rise to a
    robust architecture for app development. You can create mobile apps
    rich and robust, to hang in your favorite app store.
    
    * It's easy to understand
    
    You will not have to complicate your life too much using
    the framework is quite simple to understand. Is to develop a
    code once and reuse it as many times as you want.
    
    * Neat
    
    It is modern and designed to work with the most current, with
    a clean and neat design. The components are attractive, the typography,
    etc.
    
    * Create, build, test and compile
    
    You can create, build, and compile
    apps on any platform, all with a single command. That's why
    consider a powerful CLI.
    
    * Works fast
    
   If you despair with little, you will like Ionic. It's done
    to be quick.
    
    * Ionic Creator
    
    One of the advantages of this framwork, is one of its tools,
    Ionic Creator. Basically it allows to create the Interfaces without having
    to stick the code to machete. You can create the graphic part easily without touching
    the code for nothing.
    
* Disadvantage

    * It's a hybrid language, it's never going to work as fast as an app native.
    * It doesn't have all the features that a native app can have.
    * It is not recommended for very large projects.
    * Some components may need to be programmed specifically for iOS.
    
    
| Comparative | Hybrid applications | Native apps | Web applications |
| --- | --- | --- | --- |
| Learning curve | Simple to learn, and only one curve for all developments | More complicated, and requires learning for each platform separately | Save hardware and software costs |
| Export to different platforms | Very simple, it is developed once and exported to all | Requires development for each programming language | Easy to use |
| Development cost | Lower cost, requiring only one development and being this simpler | Higher cost, you have to develop more times and in more complex languages | They facilitate collaborative and remote work |
| Ease of finding developers | Very simple, and a single person can export to multiple platforms | Somewhat less simple, and normally requires one person for each platform | Scalable and fast update |
| Performance | Very good, except maybe for very demanding applications, games, 3D | Optimum | They cause fewer errors and problems |
| Access to device features | Very spacious, although not complete | Full | Data is more secure | 
| Visual appearance and user experience | Very good, simulating behaviors with HTML5 and CSS3, although it may not be optimal | May be optimal |

## Plannig

You can see my [planning](https://github.com/GonzaloSS/centralU-firstProject/projects/1)

## 🔧 Tools

* [Ionic-Angular](https://ionicframework.com/docs/angular/your-first-app) -- For [frontend](https://github.com/GonzaloSS/centralU-firstProject/tree/master/frontend)
* [Odoo 14](https://www.odoo.com/es_ES/) -- Windows version
* [Visual Studio Code](https://code.visualstudio.com)

## 🤝 Acknowledgments
