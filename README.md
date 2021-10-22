# full-stack-test

## Tasks

* Create endpoint to obtain all users.
  * Use pagination (no required).
* Create endpoint to obtain users by company.
  * e.g. All users from company id 1.
  * Use pagination (no required).

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
