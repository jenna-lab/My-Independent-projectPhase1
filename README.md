# My-Independent-projectPhase1

# Introduction

Welcome to JavaScript Project Mode!

You’ve worked so hard to get here and have learned a ton. Now it's time to bring it all together!

For this project, you're going build a Single Page Application (SPA). Building this application will be challenging because it will integrate everything you've learned up to this point. Your frontend will be built with HTML, CSS, and JavaScript and will communicate with a public API.

# Project Requirements

Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

# Stretch Goals

Use json-server Links to an external site.in your project to persist your app's interactivity.

## Planning

For this project, you will be given a local API served with json-server to build a frontend for. Your frontend should be built with HTML, CSS, and JavaScript and will communicate with the given mock backend.

# Project Setup

Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder. Create a new GitHub repository

# Starting the project

Run this command to get the backend started:

$ json-server --watch db.json

Test your server by visiting this route in the browser:

# CORE DELIVERABLES:

As a user I can:
1.See the details of the types of coffee drinks
2.see a menu of all drinks on the right side
3.Order a coffee drink

example of response:
GET /types

Example response:

[
"types":[
{
"title": "Black",
"price":"Kshs.300",
"description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
"ingredients": [
"Coffee"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
"id": 1
},
{
"title": "Latte",
"price":"Kshs.300",
"description": "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
"ingredients": [
"Espresso",
"Steamed Milk"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg",
"id": 2
},
]
]
4.Once you click the order button:get alert"coming right up".