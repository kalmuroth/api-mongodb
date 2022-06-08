## Thread collection [/thread]
[Back to Source](../README.md)

In the thread collection you will be able to : Create, read, update, delete threads, etc...(CRUD)

## Data structures

### Thread

+ id: (string, required)
+ link (ObjectId, required)
+ type_link (string , required)
+ messages: (Array)
  + originalPoster: (ObjectId, required)
  + content: (string, required)
  + replys (Array)
    + send_by (ObjectId, required)
    + comment (string, required)

### Get Thread [GET]

```
http://[hostingURL]/thread/:id
````
Response exemples
```json
{
    "id": "49a849a84a89a9aa48a9a4a89"
    "link": "629a26143576a45b23564c6"
    "type_link": "Event"
    "messages": [
        {
            "originalPoster": "74894a3464a84a984a9b2a2",
            "content": "Hello !",
            "replys": [
                {
                    "send_by": "98794a3464a84a8542a3b3a4",
                    "comment": "hi"
                }
            ],
        }
    ]
}
```

### Create Thread [POST]

```
http://[hostingURL]/thread
````
Body exemples
```json
{
    "link": "629a26143576a45b23564c6"
    "type_link": "Event"
    "messages": [
        {
            "originalPoster": "74894a3464a84a984a9b2a2",
            "content": "Hello !",
            "replys": [
                {
                    "send_by": "98794a3464a84a8542a3b3a4",
                    "comment": "hi"
                }
            ],
        }
    ]
}
```

### Delete Thread [DELETE]

```
http://[hostingURL]/thread/:id
````
Body exemples
```json
{
    "id": "629a26143576a45b23564c6"
}
```

### Update Thread [PUT]

```
http://[hostingURL]/thread/:id
````
Body exemples
```json
{
    "link": "629a26143576a45b23564c6"
    "type_link": "Event"
    "messages": [
        {
            "originalPoster": "74894a3464a84a984a9b2a2",
            "content": "hi",
            "replys": [
                {
                    "send_by": "98794a3464a84a8542a3b3a4",
                    "comment": "hi"
                }
            ],
        }
    ]
}
```