# 14-MVC-Tech-Blog

## Description
The purpose of this project is to build a MVC-Tech-Blog application. It was made to create and maintain a database website to makes posts and make comments. Making the code for it help me understand the concept of using MVC by following the steps and procedures of organizing files, makeing handlebars, api routes, and JS middlewear

## Installation
Once you downloaded the file, open the terminal and cd into the correct directory.
In terminal enter 
npm i

Once all the dependencies are installed type mysql -u root -p
It will ask you to login. Once you do you type
SOURCE db/schema.sql;
this will load up the tables;

Next quit sql and then run npm run start seeds/

Afterwards before starting, you need to create a .env file and enter data into the file to use in this format:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOURPASSWORD
DATABASE=techblog_db

Now you can run the project by typing
node server
Doing so you can go to the page on localhost:3001

NOTE: Due to time constrainsts some of the functionality of the site is not workable on the site.
The following functions and bugs are present:
Dasbboard handlebar:
On the dashboard the form to update a blogpost is visible despite its desgned to be hidden until you click the post itself.
The update functionality of the dashboard is not functional. It seems a bug is triggering where a post is performing a DELETE of the blogpost instead of a PUT.

HOME Screen:
![screenshot of Homepage](/public/assets/images/01.png) 

LOGIN/SIGNUP Screen
![screenshot of Homepage](/public/assets/images/02.png) 

Dashboard Screen
![screenshot of Homepage](/public/assets/images/03.png) 

Dashboard Screen when click new post
![screenshot of Homepage](/public/assets/images/04.png) 

Dashboard Screen when adding a blogpost
![screenshot of Homepage](/public/assets/images/06.png) 

Dashboard Screen when clicking Delete
![screenshot of Homepage](/public/assets/images/07.png) 

Blogpost Screen when logged in
![screenshot of Homepage](/public/assets/images/08.png) 

Blogpost Screen when new comment is added
![screenshot of Homepage](/public/assets/images/10.png) 

## Usage
You can use the project to see how website runs and see how DB is used to get, create and manipulate data. 

## Credits
For this project I used code from Mini project of week 14 to help make starter code