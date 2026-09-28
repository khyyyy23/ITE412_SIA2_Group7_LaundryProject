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

## Messaging Workflow

SPNRCO uses messaging middleware to connect the Laundry Booking Module and the Laundry Management Module. When a customer creates a laundry booking, the Booking Module acts as the producer and sends the booking information to the message queue. The consumer then receives the booking from the queue and processes it. The booking is accepted or rejected based on the set processing rule. This allows the modules to communicate without processing the request at the same time.

