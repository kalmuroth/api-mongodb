## Album collection [/album]
[Back to Source](../README.md)

In the album collection you will be able to : Create, read, update, delete albums, etc...(CRUD)

## Data structures

### Album

+ id: (string, required)
+ event (ObjectId, required)
+ album: (Array)
  + originalPoster: (ObjectId, required)
  + image: (string, required)
  + reply (Array)
    + whoReply (ObjectId, required)
    + content (string, required)

### Get Album [GET]

```
http://[hostingURL]/album/:id
````
Response exemples
```json
{
    "_id": "62a097050a25f550eb505b8f",
    "event": "62a0944c0a25f550eb505b79",
    "album": [
        {
            "originalPoster": "62a090b50a25f550eb505b60",
            "image": "me.png",
            "reply": [
                {
                    "whoReply": "62a090b50a25f550eb505b60",
                    "content": "Ok nice",
                    "_id": "62a09b9fd4911cc67bd972e7"
                }
            ],
            "_id": "62a09b9fd4911cc67bd972e6"
        }
    ],
    "id": "62a097050a25f550eb505b8f"
}
```

### Create Album [POST]

```
http://[hostingURL]/album
````
Body exemples
```json
{
    "event": "629a26143576a45b23564c6",
    "album": [
        {
            "originalPoster": "62a090b50a25f550eb505b60",
            "image": "me.png",
            "reply": [
                {
                    "whoReply": "62a090b50a25f550eb505b60",
                    "content": "Ok"
                }
            ]
        }
    ]
}
```

### Delete Album [DELETE]

```
http://[hostingURL]/album/:id
````
Body exemples
```json
{
    "id": "a4884c5qs64cq654csq564csq54"
}
```

### Update Album [PUT]

```
http://[hostingURL]/album/:id
````
Body exemples
```json
{
    "event": "629a26143576a45b23564c6",
    "album": [
        {
            "originalPoster": "62a090b50a25f550eb505b60",
            "image": "me.png",
            "reply": [
                {
                    "whoReply": "62a090b50a25f550eb505b60",
                    "content": "Ok"
                }
            ]
        }
    ]
}
```