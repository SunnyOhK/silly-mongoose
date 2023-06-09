# Silly Mongoose  &nbsp; <img height="26px" src="assets/mongoose-img.png">

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit) 


## Description
Silly Mongoose is an API for a social networking application. Here, users can share thoughts, establish friendships, and react to other users' thoughts. This application utilizes a MongoDB database supported by Express.js and Mongoose to fulfill all back-end functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Technology Stack](#technology-stack)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

## Installation

This application does not have a UI so all interactions will take place in the command line and in Insomnia (or other desktop framework for testing RESTful applications). 
1. Clone the GitHub repository to your local environment using the provided SSH key.

        git clone git@github.com:SunnyOhK/silly-mongoose.git


2. From your command line:
    - Insure that all node packages have been installed

          /silly-mongoose
              npm i
    - Seed the database from the utils folder
    
          /silly-mongoose
              node utils/seed.js  <--OR-->  npm run seed
            
    - Initiate the MongoDB server from the root folder

          /silly-mongoose
              node index.js  <--OR-->  nodemon index.js  <--OR-->  npm run dev

3. In your Insomnia dashboard, you can test all GET, POST, PUT, and DEL routes using the following URL and the following subdirectories:


|  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   URL Paths |  | 
| ---- | --- | --- | 
| . . . . . . . . . . . . . . . . . . . | &nbsp; &nbsp; &nbsp;  http://localhost:3001/api | . . . . . . . . . . . . . . . . . . . . | 
| USERS | /users | /users/:userId  |
| FRIENDS |  | /users/:userId/friends/:friendId |
| THOUGHTS | /thoughts | /thoughts/:thoughtId |
| REACTIONS | /thoughts/:thoughtId/reactions | /thoughts/:thoughtId/reactions/:reactionId |



## Usage 

The demo video (below) will take you step-by-step through the following inquiries:
1. GET - (find) all users, single user by ID, all thoughts, single thought by ID 
2. POST - (create) new user, new thought, new reaction to a thought, and (add) new friend
3. PUT - (update) single user by ID, single thought by ID, single reaction by ID
4. DEL - (delete) single user by ID, single thought by ID, single reaction by ID, (remove) friend by ID


<b>BONUS FEATURES:</b> 
- When adding a friend, the code has been updated to display a new friend for <i>each</i> user in the friendship. After adding a friend to a user, be sure to check the Find All Users & Find User by ID routes to see the new friend lists! 
- When deleting a user, all associated thoughts (and assigned reactions) will also be deleted!


### Demo:

After you clone the repository and install the node modules, please follow this video tutorial for simple step-by-step instructions:



https://github.com/SunnyOhK/silly-mongoose/assets/127900916/9abf1cbb-a554-431c-9df1-8bab2104f537




🎬 Or you can view the video at: [Screencastify](https://drive.google.com/file/d/1G1wqXve4cfnJ6LX2E4W0oRmq54oSttIc/view)

## Technology Stack

|  | Tech Stack | Description |
| ---- | --- | --- |
| Foundation |  |  |
| <img height="20px" src="assets/jsIcon.png"> | JavaScript | Scripting language for webpages |
| <img height="20px" src="assets/mongoIcon.png"> | MongoDB | Cross-platform document-oriented database program |
| <img height="20px" src="assets/nodeIcon.png"> | Node.js | Javascript Framework |
| Testing |  |  |
| <img height="20px" src="assets/insomniaIcon.png"> | Insomnia REST | Collaborative open source API development platform |
| npm Packages |  |  |
| <img height="20px" src="assets/mongooseIcon.png"> | mongoose | MongoDB object modeling for Node.js |
| <img height="20px" src="assets/nodemon-icon.png"> | Nodemon | Utility to monitor code changes and restart server |
| <img height="20px" src="assets/expressJsIcon.png"> | Express | Node.js module |
| <img height="20px" src="assets/momentIcon.png"> | Moment.js | Date &time display for JavaScript |


## Credits
- Alex Gonzalez: EdX Tutor


## License
This project is licensed under: [MIT](https://choosealicense.com/licenses/mit/)
<br>

## Contact

For questions, please contact me:

### GitHub: 
  &nbsp;&nbsp;&nbsp; [SunnyOhK](https://github.com/SunnyOhK)
### Project Link: 
  &nbsp;&nbsp;&nbsp; https://github.com/SunnyOhK/silly-mongoose
### Email: 
  &nbsp;&nbsp;&nbsp; 127900916+SunnyOhK@users.noreply.github.com
