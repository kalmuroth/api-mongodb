## Group collection [/group]
[Back to Source](../README.md)

In the group collection you will be able to : Create, read, update, delete groups, etc...(CRUD)

## Data structures

### Group

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

### Get Group [GET]

```
http://[hostingURL]/group/:id
````
Response exemples
```json
{
    "id": "629a26143576a45b23564c6"
    "members": [
        {
            "id": "74894a3464a84a984a9b2a2",
            "role": "Admin"
        }
    ]
    "name": "Group1",
    "description": "Group 1 description",
    "icon": "icon.png",
    "fontImage": "picture.jpeg",
    "type": "public",
    "basicAccessAll":true,
    "adminAccessAll":false
}
```

### Create Group [POST]

```
http://[hostingURL]/group
````
Body exemples
```json
{
    "members": [
        {
            "id": "74894a3464a84a984a9b2a2",
            "role": "Admin"
        }
    ]
    "name": "Group1",
    "description": "Group 1 description",
    "icon": "icon.png",
    "fontImage": "picture.jpeg",
    "type": "public",
    "basicAccessAll":true,
    "adminAccessAll":false
}
```

### Delete Group [DELETE]

```
http://[hostingURL]/group/:id
````
Body exemples
```json
{
    "id": "629a26143576a45b23564c6"
}
```

### Update Group [PUT]

```
http://[hostingURL]/group/:id
````
Body exemples
```json
{
    "members": [
        {
            "id": "74894a3464a84a984a9b2a2",
            "role": "User"
        }
    ]
    "name": "Group1",
    "description": "Group 1 description",
    "icon": "icon.png",
    "fontImage": "picture.jpeg",
    "type": "public",
    "basicAccessAll":true,
    "adminAccessAll":false
}
```