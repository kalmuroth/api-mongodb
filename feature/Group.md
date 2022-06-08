## User collection [/group]
[Back to Source](../README.md)

In the group collection you will be able to : Create, read, update, delete groups, etc...(CRUD)

## Data structures

### User

+ id: (string, required)
+ members: (Array)
  + id: (string, required)
  + role (string, required)
+ name: (string, required)
+ description: (string, required)
+ icon: (String, required)
+ fontImage: (String, required)
+ type: (String, required)
+ basicAccessAll: (Boolean, required)
+ adminAccessAll: (Boolean, required)

### Get User [GET]

```
http://[hostingURL]/group/:id
````
Response exemples
```json
{
    "id": "629a261696587a45b59128c6"
    "firstname": "Lucas",
    "lastname": "Bordner",
    "age": 21,
    "password": "Password1234",
    "email": "lucas.bordner@gmail.com"
}
```

### Create User [POST]

```
http://[hostingURL]/group
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
http://[hostingURL]/group/:id
````
Body exemples
```json
{
    "id": "629a261696587a45b59128c6"
}
```

### Update User [PUT]

```
http://[hostingURL]/group/:id
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