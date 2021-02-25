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

## Interfaces

### Mockup

### Usability

## Installation manual

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
