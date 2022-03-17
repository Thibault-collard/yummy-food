<br />
<p align="center">
  <a href="https://github.com/Thibault-collard/yummy-food">
    <img src="/app/assets/images/yummy-screenshot.png" alt="Logo" height="600">
  </a>

  <h3 align="center"> Yummy </h3>

  <p align="center">
    Simple review app to rate and takes notes about the restaurants around me
		<br />
    <br />
    <a href="https://yummy-food.eu/">View Online Demo</a>
    á
    <a href="https://github.com/Thibault-collard/yummy-food/issues">Report a Bug</a>
    á
    <a href="https://github.com/Thibault-collard/yummy-food/pulls">Suggest a modification</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About this projet

The goal of the challenge is to use the whole technologic stack of Qoqa inside the app :

- Ruby on Rails Back-end 
- React Front-end
- PostgreSQL for SQL environnment
- Styled components 
- S3 for file storage
- Route 53 as DNS
- EC2 to host website
- Github and Docker to deploy the website

With this version, you'll be able to : 
- Rate your favorites restaurants and add comments
- Watch all the reviews already published

<!-- GETTING STARTED -->
## Start the project ...

To quickly checkout this project, you don't need any credentials, just click on this link: https://yummy-food.eu/

### Prerequisite

In addition to having an adequate programming environment, it is necessary to have notions in Ruby and React to fully understand this project. 

```

### Installation

1. Clone the repo
```sh
git clone https://github.com/Thibault-collard/yummy-food.git
```
2. Instal NPM packages
```sh
npm install
```
3. Install Gem packages
```sh
bundle install
```
4. Build and launch the server
```sh
rails s
```
To replicate this project, you don't need any type of credentials or API Key

<!-- USAGE EXAMPLES -->
## Skills Used

- Synch a RoR Back-end with React Front-end
- Init and setup model and database (Restaurants and reviews)
- Create CRUD requests to manage the data
- Build an efficient system review 

<!-- ROADMAP -->
## Project Structure

FRONT (App/Javascript folder):
-> In Home folder : 
- 'Container_grid' is the layout around the grid of restaurants  
- 'Grid_restaurants' is the list of all restaurants

-> In Product folder:
- 'Header' is the quick summary of the rating of the restaurant
- 'Restaurant' is the layout around each individual restaurant page
- 'Review' displays all the reviews of the restaurant
- 'Review_form' is the way to add one more review to the restaurant

-> In Rating folder
- 'Rating' is the system used to display the stars of rating

BACK (backend folder):
-> In app/controller folder
- 'api/v1/restaurants' to handle GET, POST, PUT, DELETE requests
- 'api/v1/reviews' to handle POST, DELETE requests
- 'models' to store the structure of database

-> In View folder
- 'view' to make the connection with the React Front-end

<!-- LICENSE -->
## Licence

This folder and all of the code it contains is freely accessible, without the need for attribution. But remember that copying without understanding will not advance your skills.

<!-- CONTACT -->
## Contact

For all requests: thibault.collard@gmail.com


