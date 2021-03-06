# Bubble Tea Order Management Site :tea:

#### A merchant site that allows user to manage the bubble tea order with full CRUD functionality 4.22-4.23.2020

#### By **Jieun Kang and Jiwon Han**

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
![LastCommit](https://img.shields.io/github/last-commit/jiwon-seattle/Bubble-tea-order-management-site)
![Languages](https://img.shields.io/github/languages/top/jiwon-seattle/Bubble-tea-order-management-site)
[![MIT license](https://img.shields.io/badge/License-MIT-orange.svg)](https://lbesson.mit-license.org/)


## 1. User Flow

This is a bubble tea order site with create/read/update/delete functionality. A desirable user would be a employer or employees in bubble tea shop.

1. A user is able to create new bubble tea in the system.
2. A user is able to check each bubble tea's detail.
3. A user is able to update quantities as per order status.
4. A user is able to see if bubble tea is out of stock as message shown.
5. A user is able to restock bubble tea and the out of stock message disappear.
6. A user is able to delete a bubble tea item. 

### Future improvements

1. Database such as firebase
2. React Router for dynamical connection with each components
3. Upper-most control component for easy controlling other children
4. Chart function

### Diagram

<img src="src/img/diagram.jpg" width="550px" />

App has NavBar and BubbleTeaControl and Footer components comprehensively. BubbleTea control is a global component for BubbleTeaList, NewBubbleTeaForm and BubbleTeaDetail components. Those children components could connect via their parent control. 

### Sreenshot

<img src="src/img/bubbleTeaSite.gif" width="550px" />

## 2. Development
### Tech stack:
+ [NPM](https://www.npmjs.com/) for package management
+ [react](https://reactjs.org/) as core stack
+ [drawio](https://app.diagrams.net/) for diagram
+ [bootstrap](https://getbootstrap.com/)
+ [favicon](https://www.favicon-generator.org/) for a bubble tea favicon

### To run dev mode locally:
```bash
  $ git clone https://github.com/jiwon-seattle/Bubble-tea-order-management-site.git
  $ cd merchant-site
  $ npm install  
  # After successfull pkg installtion
  $ npm start
```
Now, it will automatically open http://localhost:3000 and show you bubble tea order management site website.

## 3. Known Bugs

There are no known bug at this moment

## 4. Support and contact details

Any feedback is appreciated! Please contact at email: jieunkang101@gmail.com or jiwon1.han@gmail.com

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jieun Kang and Jiwon Han_**
