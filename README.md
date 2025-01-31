# API

> Application Programming Interface based on Express and MongoDB developed for an e-commerce website. It enables developers to carry out fundamental operations of user, product, and order management. These operations include creating (Create), reading (Read), updating (Update), and deleting (Delete) users, products, and orders using the API.
## Table of Contents

* [Server execution online](#server-execution-online)
* [Installation](#installation)
* [Usage](#title)
  * [Auth](#auth)
  * [Users](#users)
  * [Products](#products)
  * [Orders](#orders)

## Server execution online
1. Install Insomnia, Postman or your preferred platform. 
2. In Postman, create a new project by clicking on the "New Project" button. Give your project a name and select the API that you want to test.
3. Add the host/domain name of the website that's running the API:
4. Add the routes provided in this guide.

```
https://palvaradoristorante.onrender.com/
```


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

### Products
#### POST / products:

```sh
{
    "name": "Baileys Ice Cream",
    "price": 100,
    "image": "https://www.mainespirits.com/sites/default/files/styles/recipe_-_large_image_style/public/BaileysOverIceCream.jpg?itok=UHz5QnHT",
    "type": "Brunch" 
}
```

#### Responses

* Status code: 200

```sh
{
    "name": "Baileys Ice Cream",
    "price": 100,
    "image": "https://www.mainespirits.com/sites/default/files/styles/recipe_-_large_image_style/public/BaileysOverIceCream.jpg?itok=UHz5QnHT",
    "type": "Brunch" 
}
```

* Status code: 400
```sh
{
    "message": "Neither name nor price was provided"
}
```
* Status code: 401
```sh
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 403
```sh
{
    "statusCode": 403,
    "message": "Forbidden"
}
```

#### GET / products:

#### Responses

* Status code: 200
```
[
    {
        "_id": "63fcdd113012bfb39a86f5e8",
        "name": "Vanilla Ice Cream",
        "price": 500,
        "image": "https://www.washingtonpost.com/resizer/qYpYDV1BjKI3ZimLblCjjFXhc2k=/arc-anglerfish-washpost-prod-washpost/public/KUFWIPXROII6ZLAWR67XDFGNPA.jpg",
        "type": "Brunch",
        "createdAt": "2023-02-27T16:40:49.840Z",
        "updatedAt": "2023-02-27T16:40:49.840Z"
    },
    {
        "_id": "63fd6b98efced8d444d566c6",
        "name": "Baileys Ice Cream",
        "price": 100,
        "image": "https://www.mainespirits.com/sites/default/files/styles/recipe_-_large_image_style/public/BaileysOverIceCream.jpg?itok=UHz5QnHT",
        "type": "Brunch",
        "createdAt": "2023-02-28T02:48:56.372Z",
        "updatedAt": "2023-02-28T02:48:56.372Z"
    }
]
```

* Status code: 401
```sh
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```

#### GET / products / {id}:

#### Responses

* Status code: 200
```sh
{
    "_id": "63fcdd113012bfb39a86f5e8",
    "name": "Vanilla Ice Cream",
    "price": 500,
    "image": "https://www.washingtonpost.com/resizer/qYpYDV1BjKI3ZimLblCjjFXhc2k=/arc-anglerfish-washpost-prod-washpost/public/KUFWIPXROII6ZLAWR67XDFGNPA.jpg",
    "type": "Brunch",
    "createdAt": "2023-02-27T16:40:49.840Z",
    "updatedAt": "2023-02-27T16:40:49.840Z"
}
```
* Status code: 401
```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 404
```
{
    "message": "Product with ID 63fc3f54725d45c8be7e6089 could not be found"
}
```
#### PUT / products / {id}:

```sh
{
    "name": "Mineral Water",
    "price": 20
}
```
#### Responses

* Status code: 200
```sh
{
    "_id": "63fcdbef3012bfb39a86f5bf",
    "name": "Mineral Water",
    "price": 20,
    "image": "https://recetas123.net/wp-content/uploads/Chifles.jpg",
    "type": "Brunch",
    "createdAt": "2023-02-27T16:35:59.049Z",
    "updatedAt": "2023-02-28T02:56:21.926Z"
}
```
* Status code: 400
```sh
{
    "message": "Incorrect field/s. Please update a valid option"
}
```
* Status code: 401
```sh
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 403
```sh
{
    "statusCode": 403,
    "message": "Forbidden"
}
```
* Status code: 404
```sh
{
    "message": "Product with ID 63fcdd113012bfb39a86f5e7 could not be found"
}
```

#### DELETE / products / {productId}:

#### Responses

* Status code: 200
```sh
{
    "_id": "63fd6b98efced8d444d566c6",
    "name": "Baileys Ice Cream",
    "price": 100,
    "image": "https://www.mainespirits.com/sites/default/files/styles/recipe_-_large_image_style/public/BaileysOverIceCream.jpg?itok=UHz5QnHT",
    "type": "Brunch",
    "createdAt": "2023-02-28T02:48:56.372Z",
    "updatedAt": "2023-02-28T02:48:56.372Z"
}
```
* Status code: 400
```
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
    "message": "Product with ID 63fd6b98efced8d444d566c6 could not be found"
}
```
#### PUT / orders / {id}:
```sh
{
    "client": "Andrea",
    "userId": "63f7a2c9162654ee5347b5e4",
    "products": [
    { "qty": 1, "productId": "63fcdbef3012bfb39a86f5bf" }
  ]
}
```

#### Responses

* Status code: 200
```sh
{
    "userId": "63f7a2c9162654ee5347b5e4",
    "client": "Andrea",
    "products": [
        {
            "qty": 1,
            "productId": {
                "_id": "63fcdbef3012bfb39a86f5bf",
                "name": "Mineral Water",
                "price": 20,
                "image": "https://recetas123.net/wp-content/uploads/Chifles.jpg",
                "type": "Brunch",
                "createdAt": "2023-02-27T16:35:59.049Z",
                "updatedAt": "2023-02-28T03:04:36.297Z"
            },
            "_id": "63fd746d4db075efb6f932b9"
        }
    ],
    "status": "pending",
    "_id": "63fd746d4db075efb6f932b8",
    "dateEntry": "2023-02-28T03:26:37.756Z",
    "dateProcessed": "2023-02-28T03:26:37.756Z"
}
```
#### Responses

* Status code: 400
```sh
{
    "message": "The specified userId or products could not be found"
}
```
* Status code: 401
```sh
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```

#### GET / orders:

#### Responses

* Status code: 200
```sh
```
* Status code: 401
```sh
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```

#### GET / orders / {id}:

#### Responses

* Status code: 200
```sh
{
    "_id": "63fd746d4db075efb6f932b8",
    "userId": "63f7a2c9162654ee5347b5e4",
    "client": "Andrea",
    "products": [
        {
            "qty": 1,
            "productId": {
                "_id": "63fcdbef3012bfb39a86f5bf",
                "name": "Mineral Water",
                "price": 20,
                "image": "https://recetas123.net/wp-content/uploads/Chifles.jpg",
                "type": "Brunch",
                "createdAt": "2023-02-27T16:35:59.049Z",
                "updatedAt": "2023-02-28T03:04:36.297Z"
            },
            "_id": "63fd746d4db075efb6f932b9"
        }
    ],
    "status": "pending",
    "dateEntry": "2023-02-28T03:26:37.756Z",
    "dateProcessed": "2023-02-28T03:26:37.756Z"
}
```

* Status code: 401
```sh
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 404
```sh
{
    "message": "Order with ID 63fd746d4db075efb6f932b could not be found"
}
```
#### PUT / orders / {id}:
```sh
{
    "products": [
    { "qty": 5, "productId": "63fcdbef3012bfb39a86f5bf" }
  ]
}
```

#### Responses

* Status code: 200
```sh
{
    "_id": "63fd746d4db075efb6f932b8",
    "userId": "63f7a2c9162654ee5347b5e4",
    "client": "Andrea",
    "products": [
        {
            "qty": 5,
            "productId": {
                "_id": "63fcdbef3012bfb39a86f5bf",
                "name": "Mineral Water",
                "price": 20,
                "image": "https://recetas123.net/wp-content/uploads/Chifles.jpg",
                "type": "Brunch",
                "createdAt": "2023-02-27T16:35:59.049Z",
                "updatedAt": "2023-02-28T03:04:36.297Z"
            },
            "_id": "63fd79654db075efb6f932f0"
        }
    ],
    "status": "pending",
    "dateEntry": "2023-02-28T03:26:37.756Z",
    "dateProcessed": "2023-02-28T03:47:49.361Z"
}
```
* Status code: 401
```sh
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 404
```sh
{
    "message": "Order with ID 63fc4018725d45c8be7e60a4 could not be found"
}
```
#### DELETE / products {id}:

#### Responses

* Status code: 200
```sh
```
* Status code: 401
```sh
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
* Status code: 403
```sh
{
    "message": "Action requires admin permission"
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
