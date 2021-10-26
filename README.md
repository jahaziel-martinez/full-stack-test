# full-stack-test

## Tasks

### Backend

* Get all companies.
* Create endpoint to obtain users by company.
* * e.g. All users from company id 1.
  * Use pagination (optional).
* Add a new user (optional).
* Update a specific user (optional).

### Frontend

* Drop-down list to display all companies (calling API).
* Get users by company when user change company value.
* Create a component to display a card with each user information (user ID, user name, user type and company name).

## Database structure

USER_TYPE

| name | type         |
| ---- | ------------ |
| id   | integer      |
| name | varchar(255) |

COMPANY

| name | type         |
| ---- | ------------ |
| id   | integer      |
| name | varchar(255) |

USER

| name         | type         |
| ------------ | ------------ |
| id           | integer      |
| name         | varchar(255) |
| user_type_id | integer      |
| company_id   | integer      |
