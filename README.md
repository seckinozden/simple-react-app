# simple-react-app

This is a very simple app to demonstrate an app with [React](https://react.dev/) frontend and [Java + SpringBoot](https://spring.io/projects/spring-boot) backend.


## Backend

Backend has two endpoints:
  - `GET /greet`
  - `POST /compare`


`compare` endpoint takes a json body in the follwing format and compares if given two strings in the body are the same or not. 

```
{
    "argument1": "Hello World",
    "argument2": "Hello Mars"
}
```


## Frontend
Frontend application takes two text input and compares these inputs by calling compare endpoint in the backend.

<img width="1020" alt="Empty" src="https://github.com/seckinozden/simple-string-comparator-app/assets/4036699/fa34e9d7-ec9d-48f9-8954-040b407368d7">


<img width="1020" alt="Same" src="https://github.com/seckinozden/simple-string-comparator-app/assets/4036699/0d21e37b-53c6-49d0-97f5-a5029e438a50">


<img width="1020" alt="NotSame" src="https://github.com/seckinozden/simple-string-comparator-app/assets/4036699/84d2a980-ec0a-4d2c-a7db-0057d1c5dd2d">
