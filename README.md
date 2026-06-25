# library-management-system

    This is a library management system api backend to manage books and users

# Routes & Endpoints

## /users

GET: Get list of all the users in the system
POST: Create a new user

## /users/{id}

GET: Get user data
PUT: Updating user data with user id
DELETE: Deleting a user by their ID (check if the use still has an issued book) && (is there
any fine/penalty to be collected)

## /users/subscription-details/{id}

GET: GET details of subscription of user by user id >> Date of subscription >> valid till?

## /books

GET: GET the list of all books
POST: Create/Add a new book to te system

## /books/{id}

GET: Get the details of the book by its id
PUT: Update books details
DELETE: Delete the book by its id

## /books/issued

GET: Get the list of all issued books

## /books/issues/withFine

GET: Get all issued books with their fines

### Subscription types

    >> Basic (3 Months)
    >> Standard (6 Months)
    >> Premium (12 Months)

> > If a user missed the renewal date, then the user has to pay INR 100
> > If a user missed subscription, then the user has to pay INR 100
> > If a user missed both renewal date & subscrition, then the user has to pay INR 300

## Commands

    npm init
    npm i express
    npm i nodemon --save-dev

    npm run dev