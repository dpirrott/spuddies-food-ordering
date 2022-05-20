## Overview
A mock-up of an application designed to allow hungry customers to place food orders (for pickup) with a fictitious restaurant (Spuddies). The app includes interfaces for both customers and restaurant owners. 

Users can browse a menu, filter by category, choose individual items, update their quantity, remove unwanted items, see item subtotals and a grand total, which updates live. When they place an order, they receive visual feedback that the order has been received and a loading bar shows the progress of their order towards pick-up-ready status. 

The restaurant owner will receive a notification via SMS (using Twilio's API) that an order has been placed, along with the order number. They can fetch information about any order by entering the order number on their side of the website. They can then send the customer a SMS notification with an estimate as to when their order will be ready for pickup. The loading bar on the customer side will advance in proportion to the ETA provided. When the order is ready, the customer will receive another SMS notification to let them know.

## Live Demo
Check out the live demo that's been deployed on <a href="https://spuddies-food-ordering.herokuapp.com/" target="_blank">Heroku</a>.

## Final Product
!["Menu View"](https://github.com/Rmaceac/midterm-project/blob/master/public/docs/spuddies-front-page.png?raw=true)
!["Order View"](https://github.com/Rmaceac/midterm-project/blob/master/public/docs/spuddies-order-placed.png?raw=true)
!["Restaurant View"](https://github.com/Rmaceac/midterm-project/blob/master/public/docs/spuddies-restaurant-pov.png?raw=true)

LHL Node Skeleton
=========

## Project Setup

The following steps are only for _one_ of the group members to perform.

1. Create your own copy of this repo using the `Use This Template` button, ideally using the name of your project. The repo should be marked Public
2. Verify that the skeleton code now shows up in your repo on GitHub, you should be automatically redirected
3. Clone your copy of the repo to your dev machine
4. Add your team members as collaborators to the project so that they can push to this repo
5. Let your team members know the repo URL so that they use the same repo (they should _not_ create a copy/fork of this repo since that will add additional workflow complexity to the project)


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples. 
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
