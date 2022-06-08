## Event collection [/event]
[Back to Source](../README.md)

In the event collection you will be able to : Create, read, update, delete events, etc...(CRUD)

## Data structures

### Event

+ id: (string, required)
+ members: (Array)
  + id: (string, required)
  + role (string, required)
+ name: (string, required)
+ description: (string, required)
+ start: (Date, required)
+ end: (Date, required)
+ locations: (String, required)
+ fontImage: (String, required)
+ privateAccess: (Boolean, required)

### Get Event [GET]

```
http://[hostingURL]/event/:id
````
Response exemples
```json
{
    "_id": "62a0944c0a25f550eb505b79",
    "members": [
        {
            "_id": "629e0001a7576ac6692f92d1",
            "role": "Admin"
        }
    ],
    "name": "Event",
    "description": "This is a Event",
    "start": "2021-12-09T00:00:00.000Z",
    "end": "2002-12-10T00:00:00.000Z",
    "location": "Paris",
    "fontImage": "image.png",
    "privateAccess": false,
    "id": "62a0944c0a25f550eb505b79"
}
```

### Create Event [POST]

```
http://[hostingURL]/event
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
    "name": "Event1",
    "description": "Public Event 1 description",
    "start": "15/09/2000",
    "end": "15/09/2021",
    "locations": "France",
    "fontImage":"image.jpeg",
    "privateAccess":false
}
```

### Delete Event [DELETE]

```
http://[hostingURL]/event/:id
````
Body exemples
```json
{
    "id": "629a26143576a45b23564c6"
}
```

### Update Event [PUT]

```
http://[hostingURL]/event/:id
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
    "name": "Event1",
    "description": "Public Event 1 description",
    "start": "15/09/2000",
    "end": "15/09/2021",
    "locations": "France",
    "fontImage":"image.jpeg",
    "privateAccess":false
}
```