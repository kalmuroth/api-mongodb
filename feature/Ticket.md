## Ticket collection [/ticket]
[Back to Source](../README.md)

In the ticket collection you will be able to : Create, read, update, delete tickets, etc...(CRUD)

## Data structures

### Ticket

+ id: (string, required)
+ event (ObjectId, required)
+ tickets: (Array)
  + name: (string, required)
  + price (number, required)
  + quantity (number, required)
+ purchases: (Array)
    + ticket (ObjectId)
    + contact (Array)
      + type (ObjectId, required)
      + firstname (string, required)
      + lastname (string, required)
      + address (string, required)
      + date (date, required)

### Get Ticket [GET]

```
http://[hostingURL]/ticket/:id
````
Response exemples
```json
{
    "event": "62a0944c0a25f550eb505b79",
    "tickets": [
        {
            "name": "Ticket Event 1",
            "price": 45,
            "quantity": 10,
            "_id": "62a0aef1a70134b61e27f2b9"
        }
    ],
    "purchases": [
        {
            "ticket_id": "62a0aef1a70134b61e27f2b9",
            "contact": [
                {
                    "firstname": "Lucas",
                    "lastname": "Lastname",
                    "address": "adresse",
                    "_id": "62a0af38a70134b61e27f2bf",
                    "date": "2022-06-08T14:16:24.529Z"
                }
            ],
            "_id": "62a0af38a70134b61e27f2be"
        }
    ],
    "id": "62a0aef1a70134b61e27f2b8"
}
```

### Create a Ticket [POST]

```
http://[hostingURL]/ticket
````
Body exemples
```json
{
    "event": "62a0944c0a25f550eb505b79",
    "tickets": [
        {
            "name": "Ticket Event 1",
            "price": 45,
            "quantity": 10
        }
    ]
}
```

### Delete Ticket [DELETE]

```
http://[hostingURL]/ticket/:id
````
Body exemples
```json
{
    "id": "azd1a5d1azda15a6z51d515656"
}
```

### Update Ticket [PUT]

```
http://[hostingURL]/ticket/:id
````
Body exemples
```json
{
    "event": "62a0944c0a25f550eb505b79",
    "tickets": [
        {
            "name": "Ticket Event 2",
            "price": 45,
            "quantity": 10,
            "_id": "62a0ab8e3e2b6ffc8a0647bc"
        }
    ],
    "purchases": [
        {
            "_id": "62a0ad23a70134b61e27f2ac",
            "contact": []
        },
        {
            "ticket_id": "62a0ab8e3e2b6ffc8a0647bb",
            "contact": [
                {
                    "firstname": "Lucas",
                    "lastname": "Lastname",
                    "address": "adresse",
                    "_id": "62a0ae08a70134b61e27f2af",
                    "date": "2022-06-08T14:11:20.425Z"
                }
            ],
            "_id": "62a0ae08a70134b61e27f2ae"
        }
    ],
    "id": "62a0ab8e3e2b6ffc8a0647bb"
}
```

### Purchase Ticket [POST]

```
http://[hostingURL]/ticket/:id
````
Body exemples
```json
{
    "purchases": [{
        "ticket_id": "62a0ab8e3e2b6ffc8a0647bb",
        "contact": [{
            "firstname": "Lucas",
            "lastname": "Lastname",
            "address": "adresse"
        }]
    }]
}
```