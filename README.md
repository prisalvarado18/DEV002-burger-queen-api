# API

> Application Programming Interface developed for an e-commerce website, which enables developers to carry out fundamental operations of user, product, and order management. These operations include creating (Create), reading (Read), updating (Update), and deleting (Delete) users, products, and orders using the API.
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

```POST / auth
{
	"email": "admin@localhost",
	"password": "changeme",
    "role": "admin"
}
```
#### Responses
```Status code: 200

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmNjODRjNTE4ZTZjNGM2Y2Y5OWNiMyIsImlhdCI6MTY3NzU0MTYyNiwiZXhwIjoxNjc3NjI4MDI2fQ.FlLMKh8dkXYT0sCJbeW4mU6FqV0FonP5L48AzpMQUzA"
}
```
```Status code: 400
{
    "message": "Email or password not found"
}
```

```Status code: 404
{
    "message": "Invalid password"
}
```


### Users

```POST / auth

```
CREARRRRRRRRRRRRRRRRRRRR

```POST / auth
{
  "email": "sol@systers.xyz",
  "password": "12345678Pass@",
  "roles": {
      "admin": true
  } 
}
```
#### Responses
```Status code: 200
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
```Status code: 400
{
    "message": "Neither email nor password was provided"
}
```

```Status code: 401
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
```Status code: 403
{
    "message": "moon@systers.xyz has already been registered. Please use a different email address"
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
