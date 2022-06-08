## User collection [/user]
[Back to Source](../README.md)

In the user collection you will be able to : Create, read, update, delete groups, etc...(CRUD)

## Data structures

### User

+ id: (string, required)
+ firstname: (string, required)
+ lastname: (string, required)
+ age: (number, required)
+ password: (String, required, match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/])
+ email: (String, lowercase: true, trim: true, match: [/.+@.+\..+/], unique: true,  index: true, required)

### Get User [GET]

```
http://[hostingURL]/user/:id
````
Response exemples
```json
{
    "id": "74894a3464a84a984a9b2a2"
    "firstname": "Lucas",
    "lastname": "Bordner",
    "age": 21,
    "password": "Password1234",
    "email": "lucas.bordner@gmail.com"
}
```

### Create User [POST]

```
http://[hostingURL]/user
````
Body exemples
```json
{
    "firstname": "Lucas",
    "lastname": "Bordner",
    "age": 21,
    "password": "Password1234",
    "email": "lucas.bordner@gmail.com"
}
```

### Delete User [DELETE]

```
http://[hostingURL]/user/:id
````
Body exemples
```json
{
    "id": "74894a3464a84a984a9b2a2"
}
```

### Update User [PUT]

```
http://[hostingURL]/user/:id
````
Body exemples
```json
{
    "firstname": "LucasUpdate",
    "lastname": "BordnerUpdate",
    "age": 21,
    "password": "Password1234",
    "email": "lucas.bordner@gmail.com"
}
```