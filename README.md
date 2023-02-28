# API

> Application Programming Interface based on Express and MongoDB developed for an e-commerce website. It enables developers to carry out fundamental operations of user, product, and order management. These operations include creating (Create), reading (Read), updating (Update), and deleting (Delete) users, products, and orders using the API.
## Table of Contents

* [Installation](#title)
* [Usage](#title)
  * [Subheading](#subheading)
  * [Subheading](#subheading)

## Installation

[npm][]:

```sh
git clone https://github.com/prisalvarado18/DEV002-burger-queen-api.git
npm install 
```

## Usage

### Auth

#### POST / auth:

```sh
{
	"email": "admin@localhost",
	"password": "changeme"
}
```
#### Responses

* Status code: 200:

```sh

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmNjODRjNTE4ZTZjNGM2Y2Y5OWNiMyIsImlhdCI6MTY3NzU0MTYyNiwiZXhwIjoxNjc3NjI4MDI2fQ.FlLMKh8dkXYT0sCJbeW4mU6FqV0FonP5L48AzpMQUzA"
}
```

* Status code: 400:

```sh
{
    "message": "Email or password not found"
}
```

* Status code: 404:

```
{
    "message": "Invalid password"
}
```


### Users
#### POST / users:

```sh
{
  "email": "sol@systers.xyz",
  "password": "somePa$$w0rd",
  "roles": {
      "admin": true
  } 
}
```
#### Responses

* Status code: 200

```
{
    "email": "sol@systers.xyz",
    "password": "$2b$10$o7v4jjNEFq.7Vs5cvtnKJOhqPp8crRhDsZ7jUp2ZkDdg7pGL0Egta",
    "roles": {
        "_id": "63fd45d4efced8d444d565a7",
        "admin": true,
        "createdAt": "2023-02-28T00:07:48.821Z",
        "updatedAt": "2023-02-28T00:07:48.821Z"
    },
    "_id": "63fd45d5efced8d444d565a9"
}
```
* Status code: 400

```
{
    "message": "Neither email nor password was provided"
}
```

* Status code: 401

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 403

```
{
    "message": "alreadyRegisteredEmail@systers.xyz has already been registered. Please use a different email address"
}
```

#### GET / users:

#### Responses

* Status code: 200

```sh
[
    {
        "_id": "63fcc84c518e6c4c6cf99cb3",
        "email": "admin@localhost",
        "password": "$2b$10$FGBWrsUfu98NgbgVIfR.W./9hbLOcBlcZzrljLXoCyM.m04StdmeC",
        "roles": {
            "_id": "63fcc84b518e6c4c6cf99cb0",
            "admin": true,
            "createdAt": "2023-02-27T15:12:12.024Z",
            "updatedAt": "2023-02-27T15:12:12.024Z"
        }
    },
    {
        "_id": "63fd4542efced8d444d5659f",
        "email": "grace.hopper@systers.xyz",
        "password": "$2b$10$NOdNa4T9HUlkIZNVbSdVSOdMrT1s2XZEivQ/zRZ9Z3/gQGezGGbTi",
        "roles": {
            "_id": "63fd4542efced8d444d5659d",
            "admin": false,
            "createdAt": "2023-02-28T00:05:22.652Z",
            "updatedAt": "2023-02-28T00:05:22.652Z"
        }
    },
]
    
```

* Status code: 401
```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```

* Status code: 403
```
{
    "statusCode": 403,
    "message": "Forbidden"
}
```

#### GET / users / {uid}:

#### Responses

* Status code: 200
```
{
    "_id": "63fcc84c518e6c4c6cf99cb3",
    "email": "admin@localhost",
    "password": "$2b$10$FGBWrsUfu98NgbgVIfR.W./9hbLOcBlcZzrljLXoCyM.m04StdmeC",
    "roles": {
        "_id": "63fcc84b518e6c4c6cf99cb0",
        "admin": true,
        "createdAt": "2023-02-27T15:12:12.024Z",
        "updatedAt": "2023-02-27T15:12:12.024Z"
    }
}
```
* Status code: 401
```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 403
```
{
    "statusCode": 403,
    "message": "Forbidden"
}
```
* Status code: 404
```
{
    "message": "User with id 63fcc84c518e6c4c6cf99cb5 could not be found"
}
```

#### PUT / users / {uid}:

```
{
    "email": "alejandro@company.com"
}
```

#### Responses

* Status code: 200
```
{
    "_id": "63fcca5b6502de5cad6c3577",
    "email": "alejandro@company.com",
    "password": "$2b$10$tTIbr3CF/baCRaTxyS4Q8eySLMxTsxFsqxhOTz5d0.FkQ0r4zSuK6",
    "roles": {
        "_id": "63fcca5b6502de5cad6c3575",
        "admin": false,
        "createdAt": "2023-02-27T15:20:59.319Z",
        "updatedAt": "2023-02-27T15:20:59.319Z"
    }
}
```
* Status code: 401
```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 403
```
{
    "message": "Admin permission is required, or you need to be the owner"
}
```
* Status code: 404
```
{
    "message": "Modifying roles value requires admin permission"
}
```

#### DELETE / users / {uid}:

#### Responses

* Status code: 200
```
{
    "_id": "63fd4626efced8d444d565b3",
    "email": "moon@systers.xyz",
    "password": "$2b$10$EYBzO1K.OXEfHM8ndvcyJ.lWRsg.4kWy5iI86qVqkqe2O1W/LaYC.",
    "roles": {
        "_id": "63fd4625efced8d444d565b1",
        "admin": false,
        "createdAt": "2023-02-28T00:09:09.921Z",
        "updatedAt": "2023-02-28T00:09:09.921Z"
    }
}
```
* Status code: 401
```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 403
```
{
    "message": "Admin permission is required, or you need to be the owner"
}
```
* Status code: 404
```
{
    "message": "User with id 63fd45d5efced8d444d565a could not be found"
}
```

## Contributors

| Name                |
| ------------------- |
| **Priscila Alvarado** |

## License

[MIT](LICENSE) © PALVARADO Company


##

[npm]: https://www.npmjs.com/
