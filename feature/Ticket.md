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
    "id": "azd1a5d1azda15a6z51d515656",
    "event": "629a26143576a45b23564c6",
    "tickets": [
        {
            "name": "Ticket Event 1",
            "price": 45,
            "quantity": 10,
        }
    ],
    "purchases": [
        {
            "ticket": "4654d56z4a6d54a56dz4a654d",
            "contact": [
                {
                    "type": "Ticket Event 1",
                    "firstname": "Lucas",
                    "lastname": "Lastname",
                    "address": "Adress example",
                    "date": "15/09/2021"
                }
            ]
        }
    ]
}
```

### Create Ticket [POST]

```
http://[hostingURL]/ticket
````
Body exemples
```json
{
    "event": "629a26143576a45b23564c6",
    "tickets": [
        {
            "name": "Ticket Event 1",
            "price": 45,
            "quantity": 10,
        }
    ],
    "purchases": [
        {
            "ticket": "4654d56z4a6d54a56dz4a654d",
            "contact": [
                {
                    "type": "Ticket Event 1",
                    "firstname": "Lucas",
                    "lastname": "Lastname",
                    "address": "Adress example",
                    "date": "15/09/2021"
                }
            ]
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
    "event": "629a26143576a45b23564c6",
    "tickets": [
        {
            "name": "Ticket Event 1",
            "price": 45,
            "quantity": 10,
        }
    ],
    "purchases": [
        {
            "ticket": "4654d56z4a6d54a56dz4a654d",
            "contact": [
                {
                    "type": "Ticket Event 1",
                    "firstname": "Lucas",
                    "lastname": "Lastname",
                    "address": "Adress example",
                    "date": "15/09/2021"
                }
            ]
        }
    ]
}
```