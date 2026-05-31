# Umanni Blog Test V2

A blog application built with Ruby on Rails as part of the Umanni internship technical challenge.

## Features

* User registration and authentication using Devise
* Create, edit and delete blog posts
* Authorization to ensure users can only manage their own posts
* Comment system
* Real-time comment updates using Action Cable
* Automated tests with Minitest

## Technologies Used

* Ruby on Rails 8
* Devise
* Action Cable
* SQLite3
* Minitest

## Installation

Install the project dependencies:

```bash
bundle install
```

Create and migrate the database:

```bash
bin/rails db:create
bin/rails db:migrate
```

Run the application:

```bash
bin/rails server
```

## Running Tests

```bash
bin/rails test
```

## Author

Jessica Alves
