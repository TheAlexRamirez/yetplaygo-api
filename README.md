# yetplaygo-api

YetPlaygo is a RESTful API made in [Sails](http://sailsjs.org) that should be used with the [ng-yetplaygo](https://github.com/TheAlexRamirez/ngyetplaygo) angular 2 application.

Yetplaygo is an admin-like tool for amusement parks.

### Requirements:
 - **MongoDB** > v.  3.4.2 . Make sure its running on port 27017

### Usage
    git clone https://github.com/TheAlexRamirez/yetplaygo-api
    npm install
    sails lift

When you start the application, _Game_ and _User_ objects are bootstrapped in MongoDB.

### Documentation:
Yetplaygo API routes are based on Sail's Blueprint so [take a look](http://sailsjs.com/documentation/reference/blueprint-api) of the shortcut or RESTful ways to access their methods and models. (Just consider that most of them are protected)

### Models
  - **Users**. This represents the user that are going to use this tool. They can have admin or user role.
  - **Games**. This represents the amusements in the park, their properties are:
    -   Name.
    -   Duration.
    -   Capacity.
  - **Current Games**. This is the representation of an ocurrence of a game, where users can jump in and enjoy the game. Their properties are:
    -   Users. [Array of Users]
    -   Game. [Game]
    -   Starts at.
    -   Ends at.

### Technologies Involved:
 - **JWT**
 - **SocketIO** (Included in Sails)
 - **MongoDB**

### TODO:
  - Full description/documentation of the custom/blueprint routes
