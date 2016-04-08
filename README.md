#Patient Passport

![patientpassport](https://github.com/michaelscotthurley/patient-passport/raw/master/public/img/PatientPassport.png)

###Technologies Used:
* HTML5
* CSS3
* Node.js
* Express
* MongoDB
* Mongoose
* AngularJS
* Angular UI Router
* Angular Resource
* Bootstrap CSS

###User Stories
[User Stories](https://docs.google.com/document/d/1PbmmIoLuYM5Gf3Pv1AEyc-aNVQ0rXlz3rrSZP99kIKg/pub)

###Wireframes
[Main Page](https://drive.google.com/file/d/0B1SBovvlqeEbUDFOc3dTOHkwemtucTdEOHhqeVo4UlRPLXBB/view?usp=sharing)
[Directions Page](https://drive.google.com/file/d/0B1SBovvlqeEbSm5jalFZOVpCVFFQN3Z6MVRXeGhGdXFpN1M4/view?usp=sharing)

###Approach Taken
My app idea came to me after a discussion with a friend about the poor signage at the hospital at which she works. She indicated that she wasted about a quarter of most of her work days guiding patients to their appointments. Furthermore, she stated that the hospital administration often complained about losing money due to patients being late or missing their appointments entirely.

I decided to create an app for a theoretical hospital that would use pictures and text to guide patients to their appointments upon arrival at the hospital. I decided to build the app in the MEAN stack. I built a one-model database in Mongo, built the backend in Node/Express and then used Angular to handle the rendering on the front end.

###Biggest Hurdles
I struggled with what backend/database made sense for the app. I originally attempted to use Postgres instead of Mongo. Halfway through the project, I realized Mongo would be a better fit for what I was trying to accomplish.

I wanted to focus on the front end in this project. One feature that I wanted to implement was a search box in the navigation bar for the user to search for particular departments in the hospital. This required the creation of an Angular service, and I struggled through coding this piece of the app.

###For Later
* User login/accounts to manage appointments
* Better styling of the directions page (perhaps some animations to slide between directions)
* Better images/scaling 
* Responsive design
  * This was an original goal that I did not achieve. My hover animations on the main page do not work on mobile. This is something that I would like to re-work, as the end user would most likely be using this app on his/her mobile device.   
