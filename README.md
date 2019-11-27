```
$ curl -X POST http://localhost:3000/user/ -H 'Content-Type: application/json' -d '{"firstname": "Jone", "lastname": "Doe", "email": "jone.doe@example.com", "password": "123456"}'
```

```
$ curl -X POST http://localhost:3000/user/login -H 'Content-Type: application/json' -d '{"email": "jone.doe@example.com", "password": "123456"}'
```

```
$ curl -X GET http://localhost:3000/user/7 -H 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbmUuZG9lQGV4YW1wbGUuY29tIiwidXNlcklkIjo3LCJpYXQiOjE1NzQ4NzU5MjJ9.DyK8QSs6-W02eZbzhGQooiv2Wp0Gt0tlXS4CVLp614s'
```

```
$ curl -X PUT http://localhost:3000/user/7 -H 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbmUuZG9lQGV4YW1wbGUuY29tIiwidXNlcklkIjo3LCJpYXQiOjE1NzQ4NzU5MjJ9.DyK8QSs6-W02eZbzhGQooiv2Wp0Gt0tlXS4CVLp614s'
  -d '{"firstname": "Jane", "lastname": "Doe", "email": "jone.doe@example.com", "password": "123456"}'
```

```
$ curl -X DELETE http://localhost:3000/user/7 -H 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbmUuZG9lQGV4YW1wbGUuY29tIiwidXNlcklkIjo3LCJpYXQiOjE1NzQ4NzU5MjJ9.DyK8QSs6-W02eZbzhGQooiv2Wp0Gt0tlXS4CVLp614s'
```
