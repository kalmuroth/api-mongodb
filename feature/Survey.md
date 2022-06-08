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
    "id": "49a849a84a89a9aa48a9a4a89"
    "event": "629a26143576a45b23564c6"
    "survey": [
        {
            "surveyPoster": "Lucas",
            "questions": [
                {
                    "subject": "Two plus two equal ?",
                    "responses": [
                        {
                            "option": "3",
                        },
                        {
                            "option": "4",
                        },
                        {
                            "option": "5",
                        }
                    ]
                }
            ],
            "reply": [
                {
                    "whoReply": "Pierre",
                    "content": "Why ????",
                },
            ]
        }
    ]
}
```

### Create Survey [POST]

```
http://[hostingURL]/survey
````
Body exemples
```json
{
    "event": "629a26143576a45b23564c6"
    "survey": [
        {
            "surveyPoster": "Lucas",
            "questions": [
                {
                    "subject": "Two plus two equal ?",
                    "responses": [
                        {
                            "option": "3",
                        },
                        {
                            "option": "4",
                        },
                        {
                            "option": "5",
                        }
                    ]
                }
            ],
            "reply": [
                {
                    "whoReply": "Pierre",
                    "content": "Why ????",
                },
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
    "event": "629a26143576a45b23564c6"
    "survey": [
        {
            "surveyPoster": "Lucas",
            "questions": [
                {
                    "subject": "Two plus three equal ?",
                    "responses": [
                        {
                            "option": "3",
                        },
                        {
                            "option": "4",
                        },
                        {
                            "option": "5",
                        }
                    ]
                }
            ],
            "reply": [
                {
                    "whoReply": "Pierre",
                    "content": "Why ????",
                },
            ]
        }
    ]
}
```