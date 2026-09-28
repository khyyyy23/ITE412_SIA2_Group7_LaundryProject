# Project Overview

## 1. System Objectives

The main objective of SPNRCO is to provide an online laundry booking system that makes it easier for customers to schedule laundry services. The system will help customers manage their bookings while allowing the laundry shop to organize and monitor incoming orders.

The system aims to reduce manual booking, avoid scheduling problems, and make the laundry service process more organized.

## 2. Proposed Scope

### Systems or Modules to Integrate

The proposed system will include the following modules:

* Customer Registration and Login
* Customer Profile
* Laundry Service Selection
* Laundry Booking and Scheduling
* Booking Management
* Booking Status
* Database
* Admin Management

### In-Scope Features

The system will allow customers to:

* Create an account and log in
* View available laundry services
* Select a laundry service
* Make a laundry booking
* Choose a preferred schedule
* View their booking information
* Monitor the status of their booking

The laundry shop will be able to:

* View customer bookings
* Manage laundry bookings
* Update booking status
* Manage available laundry services
* View customer information

### Out-of-Scope

The system will not include third-party delivery riders. The laundry shop will handle the delivery of laundry orders itself.

Other advanced features that are not required for the initial version of the system will be considered for future development.

## 3. Stakeholders

* **Customers** — They will use the system to book laundry services, select schedules, and monitor their bookings.

* **Laundry Shop Owners/Staff** — They will manage customer bookings, laundry services, and booking status.

* **Administrator** — The administrator will manage users and help maintain the overall system.

## 4. Tools & Technologies

### Languages/Frameworks

* HTML
* CSS
* JavaScript
* Laravel

### Integration Approach

* REST API
* JSON
* Database integration

### Repository/Services

* GitHub
* Git
* MS Teams

### Testing Tools

* Postman
* Browser Developer Tools

## High-Level System Overview

### Major Modules/Subsystems

**1. User Account Management**
This module manages customer, shop owner, and administrator accounts. It handles registration, login, and user information.

**2. Laundry Booking Management**
This module allows customers to select laundry services, provide laundry details, and create bookings. Shop owners can view and update the booking status.

**3. Laundry and Delivery Management**
This module manages the laundry process and delivery updates. The shop owner handles the delivery of the customer's laundry.

**4. Administration and Reports**
This module allows the administrator to manage users, bookings, services, and system records. It also provides reports that can help monitor the system.

### External Systems/Interfaces

The system uses a firebase database to store user accounts, laundry bookings, laundry records, and other system data. 

### Data Flow Summary

Customers provide their account information, laundry details and booking information through the system. The system stores the information in the database and sends the booking details to the shop owner. The shop owner manages the laundry booking, updates the laundry status, and handles the delivery. The administrator manages users, services, bookings, and system records. Updated information and booking status are then provided to the appropriate users.

## Integration Pattern & Rationale

### Integration Pattern

Hub-Spoke

In the SPNRCO Laundry Booking and Delivery App Management system, the Hub-Spoke pattern is used to manage communication between the modules. When a customer creates an account or makes a laundry booking, the request is sent to the Integration Hub through the REST API. The Hub routes the request to the User Management or Laundry Booking Module. The Laundry Booking Module sends the booking information to the database and makes it available to the shop owner. The Laundry and Delivery Module receives the booking details through the Hub and updates the laundry and delivery status. The Payment Module also communicates through the Hub to record payment information and payment status. The Administrator can access system information through the Hub to manage users, bookings, services, and reports.


### Rationale

The Hub-Spoke pattern is used because SPNRCO has several modules that need to communicate with each other. The Integration Hub acts as the central point that receives and routes requests between the modules. Customers, shop owners, and administrators can communicate with the system through the Hub. This reduces the need for direct connections between every module and makes the system easier to organize and maintain.



## Messaging Workflow

SPNRCO uses messaging middleware to connect the Laundry Booking Module and the Laundry Management Module. When a customer creates a laundry booking, the Booking Module acts as the producer and sends the booking information to the message queue. The consumer then receives the booking from the queue and processes it. The booking is accepted or rejected based on the set processing rule. This allows the modules to communicate without processing the request at the same time.

