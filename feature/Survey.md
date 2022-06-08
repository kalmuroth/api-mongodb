## Survey collection [/survey]
[Back to Source](../README.md)

In the survey collection you will be able to : Create, read, update, delete surveys, etc...(CRUD)

## Data structures

### Survey

+ id: (string, required)
+ event (ObjectId, required)
+ survey: (Array)
  + surveyPoster: (string, required)
  + questions (Array)
    + subject (string, required)
    + responses (Array)
      + option (string, required)
  + reply (Array)
    + whoReply (string, required)
    + content (string, required)

### Get Survey [GET]

```
http://[hostingURL]/survey/:id
````
Response exemples
```json
{
    "_id": "62a09b3cd4911cc67bd972dd",
    "event": "62a0944c0a25f550eb505b79",
    "survey": [
        {
            "surveyPoster": "62a090b50a25f550eb505b60",
            "questions": [
                {
                    "subject": "Two plus two equal ?",
                    "responses": [
                        {
                            "option": "3",
                            "_id": "62a09b3cd4911cc67bd972e0"
                        },
                        {
                            "option": "4",
                            "_id": "62a09b3cd4911cc67bd972e1"
                        },
                        {
                            "option": "5",
                            "_id": "62a09b3cd4911cc67bd972e2"
                        }
                    ],
                    "_id": "62a09b3cd4911cc67bd972df"
                }
            ],
            "reply": [
                {
                    "whoReply": "62a090b50a25f550eb505b60",
                    "content": "Why ????",
                    "_id": "62a09b3cd4911cc67bd972e3"
                }
            ],
            "_id": "62a09b3cd4911cc67bd972de"
        }
    ],
    "id": "62a09b3cd4911cc67bd972dd"
}
```

### Create Survey [POST]

```
http://[hostingURL]/survey
````
Body exemples
```json
{
    "event": "62a0944c0a25f550eb505b79",
    "survey": [
        {
            "surveyPoster": "62a090b50a25f550eb505b60",
            "questions": [
                {
                    "subject": "Two plus two equal ?",
                    "responses": [
                        {
                            "option": "3"
                        },
                        {
                            "option": "4"
                        },
                        {
                            "option": "5"
                        }
                    ]
                }
            ],
            "reply": [
                {
                    "whoReply": "62a090b50a25f550eb505b60",
                    "content": "Why ????"
                }
            ]
        }
    ]
}
```

### Delete Survey [DELETE]

```
http://[hostingURL]/survey/:id
````
Body exemples
```json
{
    "id": "49a849a84a89a9aa48a9a4a89"
}
```

### Update Survey [PUT]

```
http://[hostingURL]/survey/:id
````
Body exemples
```json
{
    "event": "62a0944c0a25f550eb505b79",
    "survey": [
        {
            "surveyPoster": "62a090b50a25f550eb505b60",
            "questions": [
                {
                    "subject": "Two plus two equal ?",
                    "responses": [
                        {
                            "option": "3"
                        },
                        {
                            "option": "4"
                        },
                        {
                            "option": "5"
                        }
                    ]
                }
            ],
            "reply": [
                {
                    "whoReply": "62a090b50a25f550eb505b60",
                    "content": "Why ????"
                }
            ]
        }
    ]
}
```