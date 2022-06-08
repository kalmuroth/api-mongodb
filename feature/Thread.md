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
    "_id": "62a095430a25f550eb505b84",
    "link": "62a0944c0a25f550eb505b79",
    "type_link": "Event",
    "messages": [
        {
            "originalPoster": "62a090b50a25f550eb505b60",
            "content": "Hello !",
            "replys": [
                {
                    "send_by": "62a090b50a25f550eb505b60",
                    "comment": "hey",
                    "_id": "62a095b00a25f550eb505b8a"
                }
            ],
            "_id": "62a095b00a25f550eb505b89"
        }
    ],
    "id": "62a095430a25f550eb505b84"
}
```

### Create Thread [POST]

```
http://[hostingURL]/thread
````
Body exemples
```json
{
    "link": "629a26143576a45b23564c6",
    "type_link": "Event",
    "messages": [
        {
            "originalPoster": "74894a3464a84a984a9b2a2",
            "content": "Hello !",
            "replys": [
                {
                    "send_by": "98794a3464a84a8542a3b3a4",
                    "comment": "hi"
                }
            ]
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
    "link": "629a26143576a45b23564c6",
    "type_link": "Event",
    "messages": [
        {
            "originalPoster": "74894a3464a84a984a9b2a2",
            "content": "hi",
            "replys": [
                {
                    "send_by": "98794a3464a84a8542a3b3a4",
                    "comment": "hi"
                }
            ]
        }
    ]
}
```